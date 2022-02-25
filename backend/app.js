const express = require('express');
const mongoose = require('mongoose');
const newsArticles = require('./routers/newsArticle');
const app = express();

app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost:27017/unihack', function(err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});

app.get('/data', newsArticles.getAll);
app.post('/add', newsArticles.addArticles);