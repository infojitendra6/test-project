import Consumer from 'sqs-consumer';
import sqsUtility from './lib/aws/sqsUtility';

function generateConsumer(input) {
    console.log( 'Setting Up Consumer at', sqsUtility.getQueueUrl(input.queue_url, input.queue_name, input.serverSetup, input.isFifo));
    return new Consumer.create({
        queueUrl: sqsUtility.getQueueUrl(input.queue_url, input.queue_name, input.serverSetup, input.isFifo),
        region: input.region,
        batchSize: input.batchSize,
        handleMessage: input.handleMessage,
    });
}

export default {
    generateConsumer
};
