const express = require('express')
const ArticleController = require('../controllers/article')
const router = express.Router();


router.get('/article', ArticleController.homePage)
router.get('/article/:id', ArticleController.showIndex)
router.get('/article/author/:author', ArticleController.showAuthor)
router.post('/article', ArticleController.create)
router.put('/article/:id', ArticleController.edit)
router.delete('/article/:id', ArticleController.delete)


module.exports = router;