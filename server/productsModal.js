const mongoose=require('mongoose')


const productSchema=new mongoose.Schema({
    name:String,
    image:String,
    price:Number,
    status:String,
    rating:Number,
    image:String,
    description:String,
})

 const Product=mongoose.model("Products",productSchema)
module.exports=Product
