import * as dotenv from 'dotenv';
dotenv.config({ path: `./.${process.env.NODE_ENV}.env` });

import createServer from './server.js';

const port = process.env.LOCAL_PORT || 443;

try {
  const server = createServer();

  console.log(`Starting server on port ${port}...`);

  server.listen(port, () => {
    console.log('Successfully started!');
  });
} catch (error) {
  console.error(`Cannot start server on port ${port} with error ${error.message} ${error.trace}`);
}