const mongose=require('mongoose')
const itemsscema=new mongose.Schema({
        productid:{
            type:String,
            required:true,
            unique:true
        },
        productname:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            default:Date.now()
        },
        category:{
            type:String,
            default:"general"
        },
        description:{
            type:String,
            default:"This is the product of XYZ commercial"
        },
        stock:{
            type:String,
            default:0
        },
        image:{
        type:String 
        },
        featured:{
            type:String,
            default:false 
        }
            

    })


module.exports=mongose.model('items',itemsscema)