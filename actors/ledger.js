import pkgAgent from '@dfinity/agent';
import { idlFactory } from './declarations/ledger.did.js';

const { HttpAgent, Actor } = pkgAgent;

export function getCanisterId() {
  return process.env.LEDGER_CANISTER_ID;
}

export async function createActor(host = process.env.HPL_HOST) {
  const agent = new HttpAgent({ host });
  const canisterId = getCanisterId();

  if (process.env.NODE_ENV === 'local') {
    await agent.fetchRootKey();
  }

  return Actor.createActor(idlFactory, {
    agent,
    canisterId
  });
}
