const router = require('express').Router();
const knex = require('../db/knex.js');


function AuthorBookentry() {
    return knex('author_book');
}

// <--GET ALL]--->
router.get('/', function(req, res) {
    knex('author_book')
        .select()
        .then(function(result) {
            res.json(result)
        })
})

router.get('/book/:id', function(req, res) {
    knex('author_book').where(book_id, parseInt(req.params.id))
        .select()
        .then(function(result) {
            res.json(result)
        })
})
router.get('/author/:id', function(req, res) {
    knex('author_book').where(author_id, parseInt(req.params.id))
        .select()
        .then(function(result) {
            res.json(result)
        })
})


module.exports = router;
