$(document).ready(function() {

    var myLocation = decodeURIComponent(window.location.search).split("=")[1];

    $.ajax({
        method: 'GET',
        url: `/book/${myLocation}`,
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(success) {
        console.log(success);
        $('#book_title').val(success.title);
        $('#book_genre').val(success.genre);
        $('#book_discription').val(success.description);
        $('#book_photo').attr("src", success.cover_img_url);
    });

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
                        $('#authorField').append(
                            `<input class ="authorName" type="text" class="validate" value = "${data[j].first_name}  ${data[j].last_name}">`)
                    }
            });
        })
    });

    $('#submitBookEdit').on('click', function(event) {
            event.preventDefault();
            myEdittedBook = {
                id: `${myLocation}`,
                title: $('#book_title').val(),
                genre: $('#book_genre').val(),
                description: $('#book_discription').val()
            };
            console.log(myEdittedBook)
            $.ajax({
                    method: "PUT",
                    url: `/book/${myLocation}`,
                    data: JSON.stringify(myEdittedBook),
                    contentType: "application/json"
                })
                .then(response => {
                    window.location = "/books.html";
                });
        });



});
