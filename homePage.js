const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "pug");
app.set("views","./views");

const checkingHours = function(req, res, next) {
    const date = new Date();
    const dateDay = date.getDay();
    const dateHour = date.getHours();

    if (dateDay >= 1 && dateDay <= 5 && dateHour >= 9 && dateHour <= 17) {
        next();
    } else {
        res.status(403).send("L\'application est disponible uniquement pendant les heures de travail (du lundi au vendredi, de 9h à 17h).")
    };
}

app.use(checkingHours);


app.get("/homepage", function(req, res) {
    res.render("homePage");
});

app.get("/ourservices", function(req, res) {
    res.render("ourServices");
});

app.get("/contactus", function(req, res) {
    res.render("contactUs");
});

app.listen(port);