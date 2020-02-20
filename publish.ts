import pact from '@pact-foundation/pact-node';
import { Config } from './config';

const options = {
  pactFilesOrDirs: ['./pacts'],
  pactBroker: Config.pactBrokerUrl,
  consumerVersion: Config.consumerVersion
}

if (Config.usePactBroker) {
  pact.publishPacts(options)
    .then(() => {
      console.log("Pact contract publishing complete!");
    })
    .catch(e => {
      console.log('Contract publishing failed. Error:', e);
    });
}
