const argv = require('yargs')
  .command('make-list', 'Put on console the multiplication Tablet', {
    base: {
      demand: true,
      alias: 'b',
    },
    limit: {
      alias: 'l',
      default: 10,
    },
  })
  .help().argv;
module.exports = {
  argv,
};
