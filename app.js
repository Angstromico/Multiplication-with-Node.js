const argv = require('./config/yargs').argv;
//const { command } = require('yargs');
const { createFile } = require('./multiplication-tablet');
//const fs = require('express');
//const fs = require('/yours');
let commando = argv._[0];
switch (commando) {
  case 'make-list':
    console.log('make-list');
    break;
  case 'create':
    createFile(argv.base, argv.limit).then((file) =>
      console
        .log(`The File ${file} has been created`)
        .catch((e) => console.log(e))
    );
    break;
  default:
    console.log('Bad Command');
}
//console.log(argv);
//const base = 2;
//console.log(multiplication);
//console.log(process.argv);
//const argv2 = process.argv;
//console.log('Limit: ', argv.limit);
//console.log(argv2);
//const parameter = argv[2];
//const base2 = parameter.split('=')[1];
//console.log(base2);

//createFile(7).then((file) => console.log(`The File ${file} has been created`));
//createFile('a')
//  .then((file) => console.log(`The File ${file} has been created`))
//  .catch((err) => console.log(err));
//createFile(2)
//  .then((file) => console.log(`The File ${file} has been created`))
//  .catch((err) => console.log(err));
//createFile(base2)
//  .then((file) => console.log(`The File ${file} has been created`))
//  .catch((err) => console.log(err));
