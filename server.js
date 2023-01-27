import express from 'express';

import healthcheck from './actions/healthcheck.js';
import stats from './actions/stats.js';
import metrics from './actions/metrics.js';

export default function createServer() {
  const app = express();

  app.get('/healthcheck', healthcheck);
  app.get('/stats', stats);
  app.get('/metrics', metrics);

  return app;
}