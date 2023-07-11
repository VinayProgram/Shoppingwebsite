const mongose=require('mongoose')
const itemsscema=new mongose.Schema({
        id:{
            type:String,
            required:true,
            unique:true
        },
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
        designation:{
            type:String,
            required:true,
            default:'admin'
        
        }
    })


module.exports=mongose.model('user-admin',itemsscema)