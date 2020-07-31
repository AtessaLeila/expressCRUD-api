const Article = require('../models/Article');
const article = require('../controllers/article');
const dataJSON = require('./data.json');


const articleData = dataJSON.articles.map(function (item) {
    articles = {}
    articles.name = item.name;
    articles.author = item.author;
    articles.title = item.title;
    articles.description = item.description;
    articles.url = item.url;
    articles.urlToImage = item.urlToImage;
    return articles
});

Article.deleteMany({})
    .then(() => {
        Article.create(articleData)
            .then(articles => {
                console.log(articles)
            })
            .catch(err => {
                console.log(err)
            })
    })


