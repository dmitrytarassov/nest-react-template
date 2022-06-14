// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const mongoConfig = {
  uri: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
};

export default mongoConfig;
