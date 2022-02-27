if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const NewsAPI = require('newsapi');
const path = require('path');
const cors = require('cors');
const newsapi = new NewsAPI(process.env.NEWSAPI_KEY);
const newsArticles = require('./routers/newsArticle');
const customers = require('./routers/customers');
const heatmap = require('./routers/heatmap');
const app = express();

const ONE_HOUR = 1000 * 60 * 60;

app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../frontend/build')));
mongoose.connect(`mongodb+srv://${process.env.MONGO_DOMAIN}@cluster0.vlfea.mongodb.net/unihack?retryWrites=true&w=majority`, function(err) {
    if (err) {
        return console.log('Mongoose - Connection Error:', err);
    }
    console.log('Connect Successfully');
});

// BACKEND
app.get('/heatmapdata', heatmap.getAllHeatmapData)
app.get('/data', newsArticles.getAllArticles);

// TWILIO API 
app.post('/customers/add', customers.addCustomer);
app.get('/customers/get', customers.getCustomer);
app.get('/customers/delete', customers.deleteCustomer);

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
        pageSize: 100
    }).then(response => {

        let fetchedArticles = response.articles;
        let difference = getNewArticles(database, fetchedArticles);
        if (difference.length) console.log(`Found ${difference.length} new articles`);
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
        // newsArticles.deleteOldArticles();
        newsArticles.deleteDuplicates();

    }).catch(err => {
        console.log(err);
    });
}
database = [];
fetchArticles();
setInterval(function() {
    fetchArticles();
}, ONE_HOUR);