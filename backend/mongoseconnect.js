const mongoose=require('mongoose')

const connection=async()=>{
    try {
        let connect=await mongoose.connect('mongodb://0.0.0.0:27017/shoping')
        return connect
    } catch (error) {
        console.log('error')
    }

}

module.exports=connection