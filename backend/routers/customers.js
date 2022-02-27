const mongoose = require('mongoose');
const moment = require("moment");
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
    },
    deleteDuplicates: function(req, res) {
        let tmp = [];
        NewsArticle.find({})
            .exec(function(err, newsArticles) {
                if (err) return res.status(400).json(err);
                if (!newsArticles) return res.status(404).json();
                newsArticles.forEach(function(newsArticle) {
                    if (tmp.indexOf(newsArticle.url) === -1) {
                        tmp.push(newsArticle.url);
                    } else {
                        NewsArticle.findOneAndDelete({ _id: newsArticle._id }, function(err) {
                            if (err) console.log(err);
                        });
                    }
                })
                res.json()
            })
    },
    deleteOldArticles: function() {
        console.log("Deleting old articles");
        let oneWeekAgo = moment().subtract(7, 'days');
        NewsArticle.deleteMany({ publishedAt: { $lt: oneWeekAgo } }, function(err, articles) {
            console.log(articles.length);
            if (err) return err;
        })
    }
}