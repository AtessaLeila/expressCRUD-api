const Article = require('../models/Article')


module.exports = {
    homePage: (req, res) => {
        Article.find({})
            .then(articles => {
                res.json(articles)
            })
    },
    showArticles: (req, res) => {
        Article.find({})
            .then(articles => {
                res.json(articles)
            })
    },
    showIndex: (req, res) => {
        Article.findById(req.params.id)
            .then(article => {
                res.json(article)
            })
    },
    // showAuthor: (req, res) => {
    //     Article.find({ author: req.params.author })
    //         .then(articles => {
    //             res.json(articles)
    //         })
    // },
    create: (req, res) => {
        Article.create(req.body)
            .then(article => {
                res.json(article)
            })
    },
    update: (req, res) => {
        Article.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        ).then(article => {
            res.json(article)
        })
    },
    delete: (req, res) => {
        Article.findOneAndRemove({ _id: req.params.id })
            .then(article => {
                res.json(article)
            })
    }
}
