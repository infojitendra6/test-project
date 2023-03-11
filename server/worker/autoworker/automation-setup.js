import {EventEmitter} from 'events';
import connections from '../../connections';
import sqsConsumer from '../../sqsConsumer';
import automationKueProcessing from '../../lib/automation/automationKueProcessing';
import _ from 'lodash';
import * as Sentry from '@sentry/node';
import Raven from 'raven';
// import {version} from '../package.json';
import dotenv from 'dotenv';
dotenv.config();
import serverConfig from '../../config';

function handleAutomationMessage({Body}, done) {
    let msgBody = JSON.parse(Body);
    automationKueProcessing.processAutomationPipe(msgBody, (err, task) => {
        if (err) {
            console.log(`Error... ${msgBody.stage} `);
            console.log(JSON.stringify(err));
            return done(err);
        } else {
            console.log(`Finishing.. ${msgBody.stage} `);
            return done();
        }
    });
}

class App extends EventEmitter {
    constructor(config) {
        super();
        this.config = config;
        this.connections = connections(_.toString(config.mongoURL));
        this.connections.once('ready', this.onConnected.bind(this));

        Sentry.init({
            dsn: process.env.SENTRY_WORKER,
            tracesSampleRate: 1.0,
            environment: process.env.STAGE,
            release: process.env.NPM_PACKAGE_VERSION
          });
        
        Raven.config(serverConfig.SENTRY_WORKER).install();
    }

    onConnected() {
        console.log(`Worker is live on ${this.config.stage}`);
        let automationInput = {};
        automationInput.queue_url = this.config.SQS_KUE_URL;
        automationInput.queue_name = 'automation';
        automationInput.isFifo = true;
        automationInput.serverSetup = this.config.SQS_ENVIRONMENT_NAME;
        automationInput.region = this.config.AWS_DEFAULT_REGION;
        automationInput.batchSize = 1;
        automationInput.handleMessage = handleAutomationMessage;
        const automationConsumer = sqsConsumer.generateConsumer(automationInput);

        automationConsumer.start();
        automationConsumer.on('error', err => {
            console.log(err);
        });

    }

    onReady() {
        console.log('app.ready');
        this.emit('ready');
    }

    onLost() {
        console.log('app.lost');
        this.emit('lost');
    }
}

export default function createApp(config) {
    return new App(config);
};