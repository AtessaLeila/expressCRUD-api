const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema


const articleSchema = new Schema({
    source: { name: String },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String
})

module.exports = mongoose.model('Article', articleSchema)