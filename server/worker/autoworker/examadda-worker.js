import http from 'http';
import throng from 'throng';
import config from '../../config';
import app from './automation-setup';

http.globalAgent.maxSockets = Infinity;
throng(1, start);

function start() {
  console.log('started');

  const instance = app(config);

  instance.on('ready', beginWork);
  process.on('SIGTERM', shutdown);

  function beginWork() {
    console.log('started working ...');
    instance.on('lost', shutdown);
  }

  function shutdown() {
    console.log('shutdown');
    process.exit();
  }
}
