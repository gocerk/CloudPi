const fs = require('fs');

const listDir = (path) => {
    let files = [];

    fs.readdirSync(path).forEach(item => {
        files.push(`http://localhost:3000/${item}`);
    });

    return files;
}

module.exports = { listDir };