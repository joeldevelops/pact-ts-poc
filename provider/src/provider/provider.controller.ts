import { Controller, Post, Body, Header, HttpCode } from '@nestjs/common';
import { ConsumerRequest, ProviderResponse } from '.';
import { Config } from '../../../config';

@Controller('provider')
export class ProviderController {
  @Post()
  @Header('Content-Type', 'application/json')
  @HttpCode(Config.providerStatusCode)
  provider(@Body() request: ConsumerRequest): ProviderResponse {
    return {
      data: request.request,
      count: Math.floor(100 * Math.random())
    };
  }
}
