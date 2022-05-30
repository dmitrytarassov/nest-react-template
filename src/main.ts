import { NestFactory } from '@nestjs/core';
import { AppModule } from '@backend/app/app.module';
import * as session from 'express-session';
import * as path from 'path';
import * as multer from 'multer';
import * as bodyParser from 'body-parser';

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

  app.use(bodyParser.json({limit: '5mb'}));
  app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

  await app.listen(process.env.PORT || 8080);

  const server = app.getHttpServer();
  const router = server._events.request._router;

  const availableRoutes: [] = router.stack
    .map((layer) => {
      if (layer.route) {
        return {
          route: {
            path: layer.route.path,
            method: layer.route.stack[0].method,
          },
        };
      }
    })
    .filter((item) => item !== undefined);
  console.log(availableRoutes);
}
bootstrap();
