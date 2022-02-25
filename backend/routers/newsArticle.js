const mongoose = require('mongoose');
var NewsArticle = require('../models/newsArticle');

module.exports = {
    getAll: function(req, res) {
        NewsArticle.find({})
            .exec(function(err, newsArticles) {
                if (err) return res.status(400).json(err);
                if (!newsArticles) return res.status(404).json();
                res.json(newsArticles);
            });
    },
    addArticle: function(body) {
        body._id = new mongoose.Types.ObjectId();
        NewsArticle.create(body, function(err, newsArticle) {
            if (err) console.log(err);
        });
    }
}