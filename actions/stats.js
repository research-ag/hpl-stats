import * as ledger from '../actors/ledger.js';

function icResponseToObject(icResponse) {
  return JSON.parse(JSON.stringify(icResponse, (key, value) =>
    typeof value === 'bigint'
      ? Number(value)
      : value
  ));
}

export default async function stats(req, res) {
  try {
    const ledgerActor = await ledger.createActor();
    const stats = await ledgerActor.stats();

    const response = icResponseToObject(stats);
    res.json(response);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
      trace: error.trace,
    });
  }
}