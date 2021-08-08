const fs = require('fs');

const download = (path, buffer) => {
    const asd = fs.createWriteStream(path);

    asd.write(buffer);
}


module.exports = { download };