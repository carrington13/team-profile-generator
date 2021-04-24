const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      // if theres an error, reject the promise and send the errot to the promises catch method
      if (err) {
        reject(err);
        // return out of te function here to make sure the promise doesnt accidentally execute the resolve function as well
        return;
      }

      // if everything went well, resolve the promise and send the successful data to the .then method
      resolve({
          ok: true,
          message: 'File created!'
      });
    });    
  });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/assets/css/style.css', err => {
            if (err) {
                reject(err);
                return;
            } 

            resolve({
                ok:true,
                message: 'File created!',
            })
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/index-script.js', './dist/assets/js/script.js', err => {
            if (err) {
                reject(err);
                return;
            } 

            resolve({
                ok:true,
                message: 'File created!',
            })
        })
    })
}

module.exports = { writeFile, copyFile}