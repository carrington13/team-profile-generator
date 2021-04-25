const fs = require('fs');


// Write index.html and send to .dist
const writeIndexFile = pageContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageContent, err => {
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

// Copy Css file to .dist for index.html
const copyCssFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
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


module.exports = { writeIndexFile, copyCssFile}