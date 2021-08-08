const axios = require('axios');
const formData = require('form-data');
const fs = require('fs');

(async () => {

    try {
        const data = new formData();
        const file = await fs.createReadStream('/home/kaanfkennedy/Desktop/wirelessSpeaker/sample.mp3')
        data.append('file', file);
        data.append('name', 'file');
        data.append('path', '/home/kaanfkennedy/Desktop/CloudPi/backend');
        console.log(data.getHeaders());

        const response = await axios({
            method: 'POST',
            url: 'http://localhost:3000/upload-file',
            data: data, 
            headers: data.getHeaders(),
        });

        console.log(response.data);
    }catch(e) {
        throw e;
    }


    // try {
    //     const response = await axios({
    //         method: 'POST',
    //         url: 'http://localhost:3000/create-folder',
    //         data: {'folderName': 'helloWorld', 'path': '/home/kaanfkennedy/Desktop/CloudPi/backend'},
    //         headers: {'content-type': 'application/json'}
    //     });

    //     console.log(response.data);
    // }catch(e) {
    //     throw e;
    // }

    
})();