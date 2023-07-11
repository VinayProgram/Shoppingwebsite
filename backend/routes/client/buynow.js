const connect=require('../../mongoseconnect')
const item=require('../../module/customer/customerhistory')
const express=require('express')
const app=express()
const usertoken=require('../../middleware/clienttokencheck')
const bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


app.post('/buynow',usertoken,async(req,res)=>{
    let con=await connect()
    console.log(req.token)
    let useremail=req.token
    let email=req.body.email
    let productid=req.body.productid
    let price=req.body.price
    let productname=req.body.productname
    let size=req.body.size
    let paymentmethod=req.body.pay
    let Contact=req.body.Contact
    let Contact2=req.body.Contact2
    let address=req.body.address
    let add=new item({useremail,email,productid,price,productname,size,paymentmethod,Contact,Contact2,address})
    add=await add.save()
    res.json(add)
})

app.post('/orderhistory',usertoken,async(req,res)=>{
    let con=await connect()
    console.log(req.token)
    let add=await item.find({"$or":[
        {"useremail":{$regex:req.token}},
      ]
    })
    res.json(add)
})

app.post('/buynow/delete',usertoken,async(req,res)=>{
    let con=await connect()
    console.log(req.token)
    checkproduct()
    let id=req.body.id
    let add=await item.deleteOne({productid:id})
    res.json(add)
})


module.exports=app