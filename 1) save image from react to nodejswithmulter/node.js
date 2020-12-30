const router = require('express').Router();
const Article = require('../models/article');
const multer = require('multer');
const path = "./uploads";
const uuid = require("uuid");


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, path)
},
filename: function (req, file, cb) {
  cb(null, uuid.v4() + file.originalname )
}
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
  } else {
      cb("Type file is not access", false);
  }
};

var upload = multer({ storage,fileFilter }).single('file')

router.post('/upload',function(req, res) {
    console.log('go upload img : ');
    console.log(req.body);
    
   upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          }
     return res.status(200).send(req.file)
   })
   
});