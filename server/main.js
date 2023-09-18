const express = require('express')
const mongoose=require('mongoose')
const Product=require('./productsModal')
const Command=require('./CommandsModal')
const cors=require('cors')
const multer=require('multer')
const bodyparser=require('body-parser')
const path=require('path')
const app=express()
require('dotenv').config()
app.use(cors())
app.use(bodyparser())
app.use('/images', express.static('../server/images'));

mongoose.connect(process.env.db)

//--------------------end points-----------//
//get all
app.get('/get-products',async (req,res)=>{
  let result=await Product.find({})
  res.send(result)
})

//delete by id
app.post('/delete',async (req,res)=>{
  let result =await Product.findByIdAndDelete(req.body.id)
  res.send('delete succeded')
})
//add new product
app.post('/add-product',(req,res)=>{
  console.log('working')
  let product=req.body.product
  
  let addingprocess=new Product({
    name:product.name,
    price:product.price,
    status:product.status,
    rating:product.rating,
    image:product.image,
    description:product.description
  })
  addingprocess.save()
  res.json({status:true})
})

//store pictures
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images')
    
    
  },
  filename: (req, file, cb) => {
   
    let imageName=`${Date.now()}_added.png`
   
    cb(null,imageName)
  },
})
const upload = multer({ storage: storage })



app.post('/images', upload.single('file'), function (req, res) {
 res.send({path:req.file.path,message:'image uploaded'})
  
})
//add commands
app.post('/add-command',(req,res)=>{
  let commandinformations=req.body
  console.log(req.body)
  let command=new Command({
    fullname:commandinformations.fullname,
    adress:commandinformations.adress,
    country:commandinformations.country,
    postalcode:commandinformations.postalcode,
    POD:commandinformations.POD,
    pid:commandinformations.pid,
    qty:commandinformations.qty,
    price:commandinformations.price,

  })
  command.save()
  res.json({message:'added'})
})
//get commands
app.get('/get-commands',async (req,res)=>{
  let result=await Command.find({})
  res.send(result)

})

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(3001||process.env.PORT,()=>{
    console.log('listening on port 3001')
})