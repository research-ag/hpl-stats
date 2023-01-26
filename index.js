import fetch from 'node-fetch';
import pkgAgent from '@dfinity/agent';

const {HttpAgent, Actor} = pkgAgent;

import {idlFactory} from './declarations/ledger.did.js';

const actorIC = async () => {
    const canisterId = 'ryjl3-tyaaa-aaaaa-aaaba-cai';

    const host = 'http://127.0.0.1:4943/';

    const agent = new HttpAgent({fetch, host});

    // Local only
    await agent.fetchRootKey();

    return Actor.createActor(idlFactory, {
        agent,
        canisterId
    });
};

async function main() {
    const actor = await actorIC();
    const stats = await actor.stats();
    console.log(stats);
}

main();