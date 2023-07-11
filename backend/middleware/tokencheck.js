var jwt=require('jsonwebtoken')
const secrettoken='vinay@1234'

const tokenauthorisation=(req,res,next)=>{
let token=req.header('auth-token')
if(token)
{
let author=jwt.verify(token,secrettoken)
req.token=author
next()
}
else{res.send('error')}
}

module.exports=tokenauthorisation