import { Controller, Get } from '@nestjs/common';
import { ConsumerService, ConsumerRequest, ProviderResponse } from './consumer';
import { Config } from '@config';

@Controller('pact')
export class AppController {
  constructor(private readonly consumerService: ConsumerService) {}

  @Get()
  getInfo(): Promise<ProviderResponse> {
    const request: ConsumerRequest = {
      request: 'Some request'
    };
    return this.consumerService.provider(Config.providerPort, request);
  }
}
