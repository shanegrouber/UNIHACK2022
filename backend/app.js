const express = require('express');
const mongoose = require('mongoose');
const NewsAPI = require('newsapi');
const path = require('path');

const newsapi = new NewsAPI('9d8ac27362174fb1ae77114dc8ed8f97');
const newsArticles = require('./routers/newsArticle');
const app = express();

app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../frontend/build')))

mongoose.connect('mongodb://localhost:27017/unihack', function(err) {
    if (err) {
        return console.log('Mongoose - Connection Error:', err);
    }
    console.log('Connect Successfully');
});

app.get('/data', newsArticles.getAll);



function getNewArticles(oldDB, newDB) {
    let oldTitles = oldDB.map(x => x.title);
    let fetchedTitles = newDB.map(x => x.title);
    let newTitles = fetchedTitles.filter(x => !oldTitles.includes(x));
    let difference = []
    newTitles.forEach(x => {
        difference.push(newDB.find(y => y.title === x))
    })
    database = newDB;
    return difference;
}

function fetchArticles() {
    d = new Date();
    newsapi.v2.topHeadlines({
        language: 'en',
        from: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()-1}`,
        sources: 'abc-news,bbc-news'
    }).then(response => {

        let fetchedArticles = response.articles;
        let difference = getNewArticles(database, fetchedArticles);
        console.log(`Found ${difference.length} new articles`);
        for (let i = 0; i < difference.length; i++) {
            let article = difference[i];
            let newArticle = {
                title: article.title,
                source: article.source.name,
                author: article.author,
                description: article.description,
                url: article.url,
                thumbnail: article.urlToImage,
                publishedAt: article.publishedAt,
                content: article.content
            }
            newsArticles.addArticle(newArticle);
            database.push(article)
        }

    }).catch(err => {
        console.log(err);
    });
}
database = [];
// setInterval(function() {
//     fetchArticles();
// }, 10000);