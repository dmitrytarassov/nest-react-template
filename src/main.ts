import { NestFactory } from '@nestjs/core';
import { AppModule } from '@backend/app/app.module';
import * as session from 'express-session';
import * as path from 'path';

const MongoStore = require('connect-mongo');
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'nlnbjbde833qhn',
      store: MongoStore.create({
        mongoUrl: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
      }),
    }),
  );

  // @ts-ignore
  app.useStaticAssets(path.join(__dirname, '..', 'public'), {
    index: false,
    prefix: '/public',
  });

  await app.listen(process.env.PORT || 8080);
}
bootstrap();
