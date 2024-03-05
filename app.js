const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
const users = []

app.use(bodyParser.urlencoded({extended:false}))




app.get("/", (req, res, next) => {
    res.render("index", { pageTitle: "add user" });
});

app.get("/users", (req, res, next) => {
    res.render("users", { pageTitle: "users" ,users:users});
});

app.post("/adduser", (req, res, next) => {
    users.push({name: req.body.username})
    res.redirect("/");
});

app.listen(3000);
