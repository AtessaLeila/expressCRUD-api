const express = require('express')
const ArticleController = require('../controllers/article')
const router = express.Router();

router.get('/', ArticleController.homePage)
router.get('/article', ArticleController.showArticles)
router.get('/article/index/:id', ArticleController.showIndex)
router.get('/article/author/:author', ArticleController.showAuthor)
router.post('/create', ArticleController.create)
router.put('/update/:id', ArticleController.update)
router.delete('/delete/:id', ArticleController.delete)


module.exports = router;