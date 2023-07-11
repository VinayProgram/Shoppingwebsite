const mongose=require('mongoose')
const itemsscema=new mongose.Schema({
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        
        },
        address:{
            type:String,
            required:true,
        },
        contact:{
            type:Number,
            required:true,
        }
    })


module.exports=mongose.model('customer',itemsscema)