const express=require('express')
const bodyParser=require('body-parser')
const db=require('./dbConnection')
const app=express()
const cors=require('cors')
const path=require('path')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static( `${__dirname}/upload`));

app.use(cors())
const route=require('./routes')
app.use('/lab_at_home_api',route)

app.listen(4010,()=>{
    console.log("Server created successfully at 4004");
})