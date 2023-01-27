import * as ledger from '../actors/ledger.js';
import { getPrometheusPayload } from '../utils/prometheus.js';

export default async function getLedgerStats(req, res) {
  try {
    const ledgerActor = await ledger.createActor();
    const stats = await ledgerActor.stats();

    const response = getPrometheusPayload(stats);
    res.json(response);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
      trace: error.trace,
    });
  }
}