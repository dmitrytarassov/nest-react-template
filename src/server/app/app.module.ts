// blog-server/src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewModule } from '../view/view.module';
import { ConsoleModule } from 'nestjs-console';

@Module({
  imports: [ViewModule, ConsoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
