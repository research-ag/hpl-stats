import express from 'express';

import healthcheck from './actions/healthcheck.js';
import getLedgerStats from './actions/getLedgerStats.js';

export default function createServer() {
  const app = express();

  app.get('/healthcheck', healthcheck);
  app.get('/stats', getLedgerStats);

  return app;
}