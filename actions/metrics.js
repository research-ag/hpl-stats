import * as ledger from '../actors/ledger.js';
import { contentType, collectMetrics } from '../utils/prometheus.js';

export default async function metrics(req, res) {
  try {
    const ledgerActor = await ledger.createActor();
    const stats = await ledgerActor.stats();

    const metrics = await collectMetrics(stats);

    res.set('Content-Type', contentType);
    res.end(metrics);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
      trace: error.trace,
    });
  }
}