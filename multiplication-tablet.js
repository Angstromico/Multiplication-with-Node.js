//Requires
const fs = require('fs');
module.exports.createFile = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base) || !Number(limit)) {
      reject('The base is not a number');
      return;
    }
    let data = '';
    for (let i = 1; i <= limit; i++) {
      data += `${base} X ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tablets/tablet${base}-${limit}times.txt`, data, (err) => {
      if (err) reject(err);
      resolve(`tablet${base}.txt`);
    });
  });
};
//module.exports = {
//    createFile
//}
