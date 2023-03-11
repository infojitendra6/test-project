import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import fileupload from 'express-fileupload'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import aws from 'aws-sdk';
import * as Sentry from '@sentry/node';
import chalk from './chalk';
import serverConfig from './config';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the Express App
const app = new Express();


// Sentry.init({
//     dsn: process.env.SENTRY_API,
//     tracesSampleRate: 1.0,
//     environment: process.env.STAGE,
//     release: process.env.NPM_PACKAGE_VERSION
// });

// admin.initializeApp({
//     credential: admin.credential.cert(process.env.STAGE === 'production' ? serviceProdAccount : serviceDevAccount)
// });

// import Category from './routes/api.v1.category.routes'
// // Set native promises as mongoose promise
// mongoose.Promise = global.Promise;

// const dbOptions = {
//     reconnectTries: 300, // Never stop trying to reconnect
//     reconnectInterval: 500, // Reconnect every 500ms
//     poolSize: Number(process.env.DB_POOL_SIZE) || 200, // Maintain up to 10 socket connections
//     useCreateIndex: true
// };


// if (process.env.STAGE !== 'production') {
//     mongoose.set('debug', true);
// }

// // Apply body Parser and server public assets and routes
// app.use(compression());
// app.use(bodyParser.json({ limit: '5mb' }));
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
// app.use(cookieParser());
// app.enable('trust proxy');
// app.use(fileupload())


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
//     res.header('Access-Control-Allow-Credentials', true);
//     if (req.method === 'OPTIONS') {
//         res.sendStatus(200);
//     } else {
//         next();
//     }
// });

// app.use("*", (req, res, next) => {
//     const { hostname, originalUrl, protocol, method } = req;
//     console.log(
//         `${method === "GET" ? chalk.getReq(method) : chalk.postReq(method)
//         }  ${protocol}://${hostname}:${serverConfig.PORT}${originalUrl}`
//     );
//     next();
// });

//  app.use('/v1',Category)

app.get("/", function (req, res) {
    res.json({"jitu ":"test"})
 });

 app.get("/jitu", function (req, res) {
    res.json({"jitu ":"test2"})
 });

// app.use(Sentry.Handlers.errorHandler());

// start app
let PORT=8304
app.listen(PORT, (error) => {
    if (!error) {
        console.log(`Customer API is running on port: ${PORT}!`); // eslint-disable-line
    }
});
// app.keepAliveTimeout = 180 * 1000;
// app.headersTimeout = 180 * 1000;
export default app;
