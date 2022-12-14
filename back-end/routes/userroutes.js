const router= require('express').Router();
const multer = require("multer");
const {v4:uuidv4} =require('uuid');
const path = require('path')
let User = require("../models/userModel")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images');
    },
    filename:function(req,file,cb){
        cb(null,uuidv4()+ "-"+ Date.now() + path.extname(file.originalname));
    }
});
const fileFilter =(req,file,cb)=>{
    const allowedFileTypes = ['image/jpeg','image/jpg','image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

let uploads = multer({storage,fileFilter});
router.route('/add').post(uploads.single('photo'),(req,res)=>{
    const name =req.body.name;
    const photo =req.file.filename;
    const newUserData={
        name,
        photo
    }
    const newUser = new User(newUserData)

    newUser.save()
            .then(()=>res.json("User Added"))
            .catch(err=>res.status(400).json('Error'+ err));
})
router.route('/rec').get((req,res)=>{
    User.find()
        .then(user=>res.json(user))
        .catch(err=>res.json(err))
})
module.exports = router;