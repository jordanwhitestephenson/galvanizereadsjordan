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


//ADD A BOOK//
router.post('/', function(req, res) {
    var userID;
    console.log(res)
    //if name is already used/
    knex('author').where('last_name', req.body.last_name).select('id').then(result => {
      if (result.length === 0) {
        throw new Error ('NO AUTHOR!')
      }
        // userID = result[0].id
        return Bookentry().insert({
          title: req.body.title,
          genre: req.body.genre,
          description: req.body.description,
          cover_img_url: req.body.cover_img_url,
        }, ['title', 'genre', 'description', 'cover_img_url'])
        .then(function(result) {
          res.json(result)
          console.log('this is not catched', result)
        })
    })
        .catch(result => {
            console.log('this is the catch result', result)
            knex('author').insert({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name
                }, 'id')
                //create book
                .then(result => {
                    return Bookentry().insert({
                      title: req.body.title,
                      genre: req.body.genre,
                      description: req.body.description,
                      cover_img_url: req.body.cover_img_url,
                    }, ['title', 'genre', 'description', 'cover_img_url'])
                        .then(result => {
                            res.json(result)
                        });
                })
        })
});
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

module.exports = router;
