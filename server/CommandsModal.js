const mongoose = require('mongoose')

const CommandSchema=new mongoose.Schema({
    fullname:String,
    country:String,
    adress:String,
    postalcode:Number,
    POD:Boolean,
    pid:String,
    qty:Number,
    price:Number
})

const Command =mongoose.model('Command',CommandSchema)

module.exports=Command