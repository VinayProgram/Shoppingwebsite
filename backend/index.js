const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())

app.get('/',async(req,res)=>{res.send('Welcome to home page');})
app.use('/admin',require('./routes/admin/additem'))
app.use('/admin',require('./routes/admin/useradmin'))
app.use('/customer',require('./routes/client/client-login-signup'))
app.use('/customer',require('./routes/client/buynow'))
app.listen(3500)

