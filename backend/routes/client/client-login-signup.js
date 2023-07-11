let adduser=require('../../module/customer/customer-signup')
let connect=require('../../mongoseconnect')
let express=require('express')
const bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')
const app=express()
app.use(express.json())

app.post('/signup',async(req,res)=>{
 await connect()   
 let name=req.body.name
 let email=req.body.email
 let address=req.body.address
 let contact=req.body.contact
 const salt=await bcrypt.genSalt(10)
 const password=await bcrypt.hash(req.body.password,salt)
 let data=new adduser({name,email,password,address,contact})
    data=await data.save()
    res.json(data)
})


app.post('/login',async(req,res)=>{
    await connect()   
    let email=req.body.email
    let emailid=await adduser.findOne({email})
    if(!emailid){res.json("incorrect details")}
    else{
        let password=await bcrypt.compare(req.body.password,emailid.password)  
        if(password===true){
            let token=jwt.sign(emailid.email,"client@1234")
            res.json(token)
        }
        else{
            res.json("incorrect details")
        }
    }  
    })




module.exports=app