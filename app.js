// jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var items = ["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var today = new Date();

    var option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", option)
    res.render('list', { kindOfDay: day, newListItems: items })
})

app.post('/', (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/")
    console.log(item)
})

// listen to 3000 port
app.listen(3000, () => {
    console.log('server is running')
});