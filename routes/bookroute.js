const router = require('express').Router();
const knex = require('../db/knex.js');


function Bookentry() {
    return knex('book');
}

// <--GET ALL BOOKS--->
router.get('/', function(req, res) {
    knex('book')
        .select()
        .then(function(result) {
            res.json(result)
        })
})

// <--GET ONE BOOK--->
router.get('/:id', function(req, res) {
    Bookentry().where('id', req.params.id).first().then(function(result) {
        res.json(result);
    });
});








// ADD A BOOK//
router.post('/', (req, res) => {
  knex('book').where('title', req.body.title).first()
    .then(book => {
      if (book) {
        return [book.id];
      } else {
        return knex('book')
          .returning('id')
          .insert({title: req.body.title,
                   genre: req.body.genre,
                   description: req.body.description,
                   cover_img_url: req.body.cover_img_url})
      }
    })
    .then((bookIds) => bookIds[0])
    .then(bookId => {
      res.status(200).send({book_id: bookId})
    })
    .catch(err => {
      res.status(503).send(err.message)
    })
})
// <--EDIT BOOK-->
router.put('/:id', function(req, res){
  Bookentry().where('id', req.params.id).update({
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.description,
    cover_img_url: req.body.cover_img_url,
  }).then(function(result){
    res.json(result);
  });
});


// <--DELETE BOOK-->

router.delete('/:id', function(req, res) {
    Bookentry().where('id', req.params.id).del('id').then(function(result) {
        console.log('successfully deleted', result);
    });
});

module.exports = router;
