//import express from "express"
const express = require("express")
const port = 4000
const  app  = express()

const user =[
    {id:1 , name: "Turki"},
    {id:2 , name: "Ali"},
    {id:3 , name: "Adam"}
]
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.get('/user', (req, res) => {
    res.send(user)
  })
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })