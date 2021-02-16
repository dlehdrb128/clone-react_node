if (process.env.NODE_ENV === 'production') {
  console.log('a');
  console.log('asdasdasd');
  console.log('qweqwe');

  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
  console.log('b');
}
