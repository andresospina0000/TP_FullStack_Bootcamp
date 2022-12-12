const mongoose = require('mongoose');

const tvShow = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    },
    platform: {
        required: true,
        type: String
    },
    length: {
        required: true,
        type: Number
    },
    rate: {
        required: true,
        type: Number
    },
})

module.exports = mongoose.model('TvShows', tvShow)