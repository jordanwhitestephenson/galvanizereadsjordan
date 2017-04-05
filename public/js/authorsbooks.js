$(document).ready(function() {


    var myLocation = decodeURIComponent(window.location.search).split("=")[1];
    console.log(myLocation)

    $.ajax({
        method: 'GET',
        url: `/author/${myLocation}`,
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(authordata) {
      $('.bookNameTitle').append(`<h3 class = "authorHeading" Author: </h3><p> ${authordata.first_name} ${authordata.last_name} </p>`)
    })


    $.ajax({
        method: 'GET',
        url: `/authorbook/author/${myLocation}`,
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(books) {
        var bookIDArray = [];
        for (var i = 0; i < books.length; i++) {
            var allBooks = books[i].book_id
            bookIDArray.push(allBooks)
        }
        bookIDArray.forEach(function(id) {
            $.get('/book', function(data) {
                for (var j = 0; j < data.length; j++)
                    if (id === data[j].id) {
                      if(data[j].cover_img_url === null){
                        $('.bookNameTitle').append(`<div class = "authorName"><h4> ${data[j].title} </h4>
                        <img src = "img/book.jpg" class = "authorBookPhoto">
                        <h4 class = "headings"> Description : </h4><p> ${data[j].description} </p>
                        </div>`)
                      } else {
                        $('.bookNameTitle').append(`<div class = "authorName"><h4> ${data[j].title} </h4>
                        <img src = "${data[j].cover_img_url}" class = "authorBookPhoto">
                        <h4 class = "headings"> Description : </h4><p> ${data[j].description} </p>
                        </div>`)
                    }
                  }
            });
        })
    });
});
