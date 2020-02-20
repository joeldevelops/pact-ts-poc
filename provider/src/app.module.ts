import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderController } from './provider';

@Module({
  imports: [],
  controllers: [AppController, ProviderController],
  providers: [AppService],
})
export class AppModule {}
