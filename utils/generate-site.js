const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/readMe.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// copying file


module.exports = writeFile;
