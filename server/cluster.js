// 'use strict';
// import appConfig from './config';
// import pm2 from 'pm2';

// if(appConfig.stage === 'production') {
//     pm2.connect(function() {
//         pm2.start({
//             script    : 'examadda-api.js',
//             exec_mode : 'cluster',            // ----> https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#schema
//             instances : appConfig.APP_INSTANCE_COUNT,
//             max_memory_restart : appConfig.APP_MAX_MEMORY + 'M',   // Auto-restart if process takes more than XXmo
//             env: {                            // If needed declare some environment variables
//                 "NODE_ENV": "production",
//             },
//             post_update: ["npm install"]       // Commands to execute once we do a pull from Keymetrics
//         }, function() {
//             pm2.interact(appConfig.PM2_PRIVATE_KEY, appConfig.PM2_PUBLIC_KEY, appConfig.PM2_MACHINE_NAME, function() {
//                 // Display logs in standard output
//                 pm2.launchBus(function(err, bus) {
//                     console.log('[PM2] Log streaming started');

//                     bus.on('log:out', function(packet) {
//                         console.log('[App:%s] %s', packet.process.name, packet.data);
//                     });

//                     bus.on('log:err', function(packet) {
//                         console.error('[App:%s][Err] %s', packet.process.name, packet.data);
//                     });
//                 });
//             });
//         });
//     });
// } else {
//     pm2.connect(function() {
//       pm2.start({
//         script    : 'examadda-api.js',
//         exec_mode : 'cluster',            // ----> https://github.com/Unitech/PM2/blob/master/ADVANCED_README.md#schema
//         instances : appConfig.APP_INSTANCE_COUNT,
//         max_memory_restart : appConfig.APP_MAX_MEMORY + 'M',   // Auto-restart if process takes more than XXmo
//         env: {                            // If needed declare some environment variables
//           "NODE_ENV": "production",
//         },
//         post_update: ["npm install"]       // Commands to execute once we do a pull from Keymetrics
//       }, function() {
//         pm2.interact(appConfig.PM2_PRIVATE_KEY, appConfig.PM2_PUBLIC_KEY, appConfig.PM2_MACHINE_NAME, function() {
//          // Display logs in standard output
//          pm2.launchBus(function(err, bus) {
//            console.log('[PM2] Log streaming started');

//            bus.on('log:out', function(packet) {
//             console.log('[App:%s] %s', packet.process.name, packet.data);
//            });

//            bus.on('log:err', function(packet) {
//              console.error('[App:%s][Err] %s', packet.process.name, packet.data);
//            });
//           });
//         });
//       });
//     });
// }
