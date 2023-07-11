let adduser=require('../../module/signup')
let connect=require('../../mongoseconnect')
let express=require('express')
const bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')
const app=express()
app.use(express.json())
const tokencheck = require("../../middleware/tokencheck");
app.post('/signup',tokencheck,async(req,res)=>{
 await connect()   
 let id=req.body.id
 let name=req.body.name
 let email=req.body.email
 let designation=req.body.designation
 const salt=await bcrypt.genSalt(10)
 const password=await bcrypt.hash(req.body.password,salt)
 let data=new adduser({id,name,email,password,designation})
    data=await data.save()
    res.json(data)
})


app.post('/login',async(req,res)=>{
    await connect()   
    let email=req.body.email
    console.log(req.body.password)
    let emailid=await adduser.findOne({email})
    if(!emailid){res.json("incorrect details"),console.log("incoorect")}
    else{
        let password=await bcrypt.compare(req.body.password,emailid.password)  
        if(password===true){
            let token=jwt.sign(emailid.email,"vinay@1234")
            res.json(token)
            console.log(token)
        }
        else{
            console.log("incorect pas")
            res.json("incorrect details")
        }
    }  
    })




module.exports=app