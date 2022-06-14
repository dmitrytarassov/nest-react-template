const mongoose = require('mongoose');

mongoose
  .connect('mongodb://92.53.104.2:27017/kinoscope', {
    useNewUrlParser: true,
  })
  .then(async (...args) => {
    console.log('connected');

    console.log(await mongoose.model('session').find({}));
  })
  .catch((...args) => {
    console.log('not connected');
    console.log(args);
  });
