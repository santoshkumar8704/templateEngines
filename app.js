const express = require('express')

const app = express()
app.get("/",(req,res,next) => {
    res.render()
})
app.get("/users",(req,res,next) => {
    res.render()
})
app.post("/adduser",(req,res,next) => {
    res.redirect("/")
})



app.listen('3000')