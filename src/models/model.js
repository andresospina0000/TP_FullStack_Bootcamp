const mongoose = require('mongoose');

const tvShow = new mongoose.Schema({
    name: {
        required: false,
        type: String
    },
    genre: {
        required: false,
        type: String
    },
    platform: {
        required: false,
        type: String
    },
    length: {
        required: false,
        type: Number
    },
    rate: {
        required: false,
        type: Number
    },
})

module.exports = mongoose.model('TvShows', tvShow)