import { Module } from '@nestjs/common';
import { CrudAuthService } from './crud_auth.service';
import { CrudAuthController } from './crud_auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './crud_auth.schema';
import mongoConfig from '@backend/utils/mongoConfig';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig),
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
  ],
  controllers: [CrudAuthController],
  providers: [CrudAuthService],
  exports: [MongooseModule],
})
export class CrudAuthModule {}
