import { register, Gauge } from 'prom-client';

const ledgerTxsGauge = new Gauge({
  name: 'txs_ledger',
  help: 'Stats about all transactions in ledger',
  labelNames: ['txStatus']
});

export const contentType = register.contentType;

export async function collectMetrics(statsResponse) {
  ledgerTxsGauge.set({ txStatus: 'submitted' }, Number(statsResponse.txs.submitted));
  ledgerTxsGauge.set({ txStatus: 'rejected' }, Number(statsResponse.txs.rejected));
  ledgerTxsGauge.set({ txStatus: 'processed' }, Number(statsResponse.txs.processed));
  ledgerTxsGauge.set({ txStatus: 'failed' }, Number(statsResponse.txs.failed));

  return await register.metrics();
}
