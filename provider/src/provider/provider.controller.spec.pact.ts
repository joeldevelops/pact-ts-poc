import { Test, TestingModule } from '@nestjs/testing';
import { Verifier, VerifierOptions } from '@pact-foundation/pact';
import { ProviderController } from './provider.controller';
import { resolve } from 'path';

import { Config } from '../../../config';

describe('Provider Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProviderController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ProviderController = module.get<ProviderController>(ProviderController);
    expect(controller).toBeDefined();
  });

  describe('Pact Verification', () => {
    const options: VerifierOptions = {
      providerBaseUrl: Config.providerBaseUrl,
      provider: Config.providerName
    };
    let result;

    if (Config.usePactBroker) {
      options.pactBrokerUrl = Config.pactBrokerUrl;
      options.publishVerificationResult = true;
      options.providerVersion = Config.providerVersion;
    } else {
      options.pactUrls = [
        resolve(process.cwd(), '../pacts/consumer-provider.json')
      ];
    }

    beforeEach(async () => {
      result = await new Verifier(options).verifyProvider();
    });

    it('should verify the pact', () => {
      console.log('result:', result);
      expect(result).toBeDefined();
    });
  });
});
