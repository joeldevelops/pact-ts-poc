import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConsumerService } from './consumer';

@Module({
  controllers: [AppController],
  providers: [ConsumerService]
})
export class AppModule {}
