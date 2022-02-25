const mongoose = require('mongoose');

const newsArticleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('NewsArticle', newsArticleSchema);