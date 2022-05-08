// blog-server/src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewModule } from '../view/view.module';

@Module({
  imports: [ViewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
