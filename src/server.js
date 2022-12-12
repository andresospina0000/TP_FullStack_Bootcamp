require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const mongoString = process.env.MONGO_DB
const Model = require('./models/model');
const app = express();
app.use(express.json());

// Constants
const hostname = '0.0.0.0';
const port = 8080;

// App
// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});
// GET/{id} method route
app.get('/:id', function (req, res) {
    res.send(`GET/${req.params.id} request to the homepage`);
});
// GET method route
app.patch('/secret', function (req, res, next) {
    res.send('Never be cruel, never be cowardly. And never eat pears!');
    console.log('This is a console.log message.');
    console.log(req.body)
});
// POST method route
app.post('/', function (req, res) {

    const data = new Model({
        name: req.body.name,
        genre: req.body.genre,
        platform: req.body.platform,
        length: req.body.length,
        rate: req.body.rate,
    })
    try {
        const saveTvShow = data.save();
        res.status(200).json(saveTvShow)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});
// DELETE method route
app.delete('/', function (req, res) {
    res.send('POST request to the homepage');
});
/*
Your implementation here
*/
app.listen(port, hostname);

mongoose.connect("mongodb://localhost/my-test-db", function (err, res) {

    if (err) {
        console.log("ERROR: connecting to Database. " + err);
    }
    app.listen(port, function () {
        console.log(this.mongoString)
        console.log(`Running on http://${hostname}:${port}`);
    });
});