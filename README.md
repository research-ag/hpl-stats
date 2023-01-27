# hpl-stats

HPL Stats is a gateway between Ledger canister and metrics database (TBD, assume it's Prometheus) written in Node.js.

## Architecture overview

TBD: Some diagram here

## Local development
1. Run `npm install`
2. Create file named `.local.env` in the root of project, having content

```
LOCAL_PORT=8081
HPL_HOST="http://127.0.0.1:4943/"
LEDGER_CANISTER_ID="ryjl3-tyaaa-aaaaa-aaaba-cai"
```
3. Run `npm run dev`

## Project structure

`index.js` - starting point of application
`server.js` - point of setuping Express
`actions/` - folder with actions that handles HTTP requests
`actors/` - folder with actors creating, holding Candid declarations and factories
`actors/declarations/` - folder with Candid declarations (TBD: put here anchor to info tells how get those declarations)
`utils/` - folder containing helpers

