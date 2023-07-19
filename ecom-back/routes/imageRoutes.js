const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
  cloud_name: "dptilutht",
  api_key: "478694965921377",
  api_secret: "rg6ZHkRFFGHi8uaZjyA0BXf_5RI"
})

router.delete('/:public_id', async(req, res)=>{
    const {public_id} = req.params;
    try{
       await cloudinary.uploader.destroy(public_id);
       res.status(200).send();
    } catch(e){
       res.status(400).send(e.message)
    }
})

module.exports = router;