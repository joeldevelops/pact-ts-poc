import { Injectable } from '@nestjs/common';
import { post } from 'request-promise-native';
import { ConsumerRequest, ProviderResponse } from './consumer.types';

@Injectable()
export class ConsumerService {
  private url = 'http://localhost';

  public async provider(port: number, body: ConsumerRequest): Promise<ProviderResponse> {
    const url = `${this.url}:${port}/provider`;
    const response = await post({
      url,
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    return JSON.parse(response);
  }
}
