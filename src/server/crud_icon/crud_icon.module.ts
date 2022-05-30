import { Module } from '@nestjs/common';
import { CrudIconController } from './crud_icon.controller';
import { CrudIconService } from './crud_icon.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Icon, IconSchema } from './crud_icon.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    ),
    MongooseModule.forFeature([{ name: Icon.name, schema: IconSchema }]),
  ],
  controllers: [CrudIconController],
  providers: [CrudIconService],
  exports: [MongooseModule],
})
export class CrudIconModule {}
