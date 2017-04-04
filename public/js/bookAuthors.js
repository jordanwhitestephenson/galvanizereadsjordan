$(document).ready(function() {


var myLocation = decodeURIComponent(window.location.search).split("=")[1];
console.log(myLocation)

// $.ajax({
//     method: 'GET',
//     url: `/author/${myLocation}`,
//     contentType: "application/json",
//     data: JSON.stringify()
// }).then(function(data) {
//     console.log('AUTHOR DATA MAN', data)
//     $('.authorNameTitle').append( `<p> ${data.first_name}  ${data.last_name} </p>`)
//     $('#author_photo').attr("src", data.img_url);
//     $('.authorBio').append(`<p> ${data.bio} </p>`)
// });
// })


$.ajax({
    method: 'GET',
    url: `/authorbook/book/${myLocation}`,
    contentType: "application/json",
    data: JSON.stringify()
}).then(function(authors) {
    var authorIDArray = [];
    for (var i = 0; i < authors.length; i++) {
        var allAuthors = authors[i].author_id
        authorIDArray.push(allAuthors)
    }
    authorIDArray.forEach(function(id) {
        $.get('/author', function(data) {
            for (var j = 0; j < data.length; j++)
                if (id === data[j].id) {
                  $('.authorNameTitle').append( `<div class = "authorName"><h3 class = "authorHeading" Author: </h3><p> ${data[j].first_name}  ${data[j].last_name} </p>

                  <img src = "${data[j].img_url}" class = "author_photo">
                  <h4 class = "headings"> Bio : </h4><p> ${data[j].bio} </p>
                  </div>`)

                }
        });
    })
});
});
