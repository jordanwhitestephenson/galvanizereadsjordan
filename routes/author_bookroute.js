const router = require('express').Router();
const knex = require('../db/knex.js');


function AuthorBookentry() {
    return knex('author_book');
}

// <--GET ALL AUTHORS--->
router.get('/', function(req, res) {
    knex('author_book')
        .select()
        .then(function(result) {
            res.json(result)
        })
})
