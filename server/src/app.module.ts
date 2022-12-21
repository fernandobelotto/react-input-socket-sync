import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InputSyncGateway } from './input-sync.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, InputSyncGateway],
})
export class AppModule {}
