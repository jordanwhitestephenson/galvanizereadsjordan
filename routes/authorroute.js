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


//ADD AUTHOR//
// router.post('/', function(req, res) {
//             knex('author').insert({
//                     first_name: req.body.first_name,
//                     last_name: req.body.last_name
//                 }, 'id')
//                 //create book
//                 .then(result => {
//                     return Bookentry().insert({
//                       title: req.body.title,
//                       genre: req.body.genre,
//                       description: req.body.description,
//                       cover_img_url: req.body.cover_img_url,
//                     }, ['title', 'genre', 'discription', 'cover_img_url'])
//                         .then(result => {
//                             res.json(result)
//                         });
//                 })
//         })
// });

module.exports = router;
