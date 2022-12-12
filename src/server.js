require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const Model = require('./models/model');
const app = express();
app.use(express.json());

// Constants
const hostname = '0.0.0.0';
const port = 8080;

// App
// GET method route
app.get('/', async function (req, res) {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});
// GET/{id} method route
app.get('/:id', async function (req, res) {
    try {
        const data = await Model.findById();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
});
// GET method route
app.patch('/:id', async function (req, res, next) {
    try {
        const tvShowId = req.params.id;
        const modifiedTvShow = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            tvShowId, modifiedTvShow, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});
// POST method route
app.post('/', async function (req, res) {

    const data = new Model({
        name: req.body.name,
        genre: req.body.genre,
        platform: req.body.platform,
        length: req.body.length,
        rate: req.body.rate,
    })
    try {
        const saveTvShow = await data.save();
        res.status(200).json(saveTvShow)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});
// DELETE method route
app.delete('/', async function (req, res) {
    const query = req.body;
    console.log(query)

    try {
        // const tvShowId = req.params.id;
        const data = await Model.findOneAndDelete(query);
        console.log(data)
        if (data) {
            res.send(`El programa de TV ${data.name} a sido eliminado con exito!!!`)
        } else {
            res.status(400).json({ message: "No se pudo eliminar el programa de TV." })
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
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
        console.log(`Running on http://${hostname}:${port}`);
    });
});