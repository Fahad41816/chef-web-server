const express = require('express')
const app  = express()
const cors = require("cors")
const PORT = 3000


const chef = require('./chefData.json')

// app use 
app.use(cors())

// router 
app.get('/',(req,res)=>{
    res.send('<h1>assigment 10</h1>')
})
  
app.get('/cheflist',(req,res)=>{
    res.send(chef)
}) 

app.get('/viewchef/:id',(req,res)=>{
    
    const id = req.params.id     
   const findData = chef.find((data)=> data.id == id)   
   res.send(findData)
})

// server posrt 
app.listen(PORT)