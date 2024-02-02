const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.header({"Access-Control-Allow-Origin":"*"})
    res.json({name:"Dhruv khandelwal"})
})

app.listen(3000,()=>{
    console.log('server runing at 3000')
})



