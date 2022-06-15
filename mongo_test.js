const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');
const { MongooseModule } = require('@nestjs/mongoose');
require('dotenv').config();

const mongoConfig = {
  uri: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
};

mongoose
  .connect(mongoConfig.uri, {
    useNewUrlParser: true,
  })
  .then(async (...args) => {
    console.log('connected');

    const store = MongoStore.create({
      mongoUrl: mongoConfig.uri,
    });

    await store.collectionP;
    console.log('Store connected');

    const module = MongooseModule.forRoot(mongoConfig.uri);

    new module.module();
    console.log('module connected');

    process.exit();
  })
  .catch((...args) => {
    console.log('not connected');
    console.log(args);
  });
