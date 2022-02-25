const mongoose = require('mongoose');

const newsArticleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: false
    },
    author: {
        type: String
    },
    description: {
        type: String,
        required: false
    },
    publishedAt: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('NewsArticle', newsArticleSchema);