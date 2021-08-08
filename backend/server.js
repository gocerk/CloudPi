const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs');

const { download } = require('./utils/download');


app.use(express.urlencoded({limit: '50mb',extended: false})); 
app.use(express.json({limit: '50mb'}));


const upload = multer();

// const jsonParser = express.json({limit: '50mb'});

app.get('/' , (req , res)=>{
   res.redirect('/upload-file');
});

app.post('/upload-file' , upload.single('file'), (req , res)=>{
    const file = req.file;
    const path = req.body.path;

    const filePath = `${path}/${file.originalname}`;
    
    console.log(filePath);
    
    try {
        download(filePath, file.buffer);
        res.status(200);
        res.send({'message': 'file was uploaded successfully', 'status': 200});
    }catch(e) {
        res.send({'error': e})
        res.status(400);
    }
});

app.post('/create-folder' , (req , res)=>{
    const folderName = req.body.folderName;
    const path = req.body.path; 
    
    const folderPath = `${path}/${folderName}`;

    console.log(folderPath);
    
    try {
        fs.mkdir(folderPath, () => {
            res.status(200);
            res.send({'message': 'folder was successfully created', 'code': 200});
        });
    }catch(e) {
        res.send({'error': e});
        res.status(400);
    } 
});



app.listen(3000);