import {
  ConsumerRequest,
  ConsumerService,
  ProviderResponse
} from '.';
import { Pact, Interaction, Matchers } from '@pact-foundation/pact';
import { Config } from '../../../config';

describe('ConsumerService', () => {
  let consumerService: ConsumerService;
  let options;
  const request: ConsumerRequest = { request: 'my request' };
  const response: ProviderResponse = {
    data: 'some data',
    count: 3
  };

  const provider = new Pact({
    spec: 2,
    consumer: Config.consumerName,
    provider: Config.providerName,
    dir: '../pacts',
    pactfileWriteMode: 'update'
  });

  beforeAll(async () => {
    options = await provider.setup();
    consumerService = new ConsumerService();
  });

  afterAll(() => provider.finalize());

  afterEach(() => provider.verify());

  it('should be defined', () => {
    expect(consumerService).toBeDefined();
  });

  describe('Pact Demo', () => {
    beforeAll(() => {
      const interaction = new Interaction()
        .given('I have some data and a count')
        .uponReceiving('A request for data and a count')
        .withRequest({
          method: 'POST',
          path: `/${Config.providerEndpoint}`,
          body: request,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .willRespondWith({
          status: Config.consumerStatusCode,
          body: {
            data: Matchers.like(response.data),
            count: Matchers.like(response.count)
          },
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        });

      return provider.addInteraction(interaction);
    });

    it('returns the correct response', async () => {
      const info = await consumerService.provider(options.port, request);
      console.log('Response:', info);
      expect(info).toStrictEqual(response);
    });
  });
});
