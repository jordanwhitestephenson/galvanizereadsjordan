const router = require('express').Router();
const knex = require('../db/knex.js');


function Authorentry() {
    return knex('author');
}

// <--GET ALL AUTHORS--->
router.get('/', function(req, res) {
    knex('author')
        .select()
        .then(function(result) {
            res.json(result)
        })
})

// <--GET ONE AUTHOR--->
router.get('/:id', function(req, res) {
    Authorentry().where('id', req.params.id).first().then(function(result) {
        res.json(result);
    });
});

// <--EDIT AUTHOR--->
router.put('/:id', function(req, res){
  Authorentry().where('id', req.params.id).update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  }).then(function(result){
    res.json(result);
  });
});

// <--DELETE AUTHOR--->

router.delete('/:id', function(req, res) {
    Authorentry().where('id', req.params.id).del('id').then(function(result) {
        console.log('YOU JUST DELETED AUTHOUR', result);
    });
});


module.exports = router;
