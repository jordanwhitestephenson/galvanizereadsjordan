$(document).ready(function() {

    $.ajax({
            method: "GET",
            url: '/author',
            data: JSON.stringify,
            contentType: "application/json"
        })
        .then(function(data) {
            console.log(data)
            for (i = 0; i < data.length; i++) {
                $('.dropdown-content').append(`<li><input value = "${data[i].first_name} ${data[i].last_name}" data-id= ${data[i].id} class= "dropDown"> </input></li>`)

            }
            $(document).on('click', ".dropDown", function(e) {
                console.log($(this).data('id'))
                $(this).css("background-color", "yellow");
                $(this).addClass("selected")

            });
        })

    $('#addBookButton').on('click', function(event) {
        event.preventDefault();
        var authors = $('.selected')
        var selectedAuthorArray = []

        for (var i = 0; i < authors.length; i++) {
            var authorsIDs = $(authors[i]).data('id');
            selectedAuthorArray.push(authorsIDs)
        }

        myNewBook = {
            title: $('#book_title').val(),
            genre: $('#book_genre').val(),
            description: $('#book_discription').val()
        };

        $.ajax({
                method: "POST",
                url: '/book',
                data: JSON.stringify(myNewBook),
                contentType: "application/json"
            })
            .then(response => {
              console.log(response)

                selectedAuthorArray.forEach(function(id) {
                    myAuthors = {
                        author_id: id,
                        book_id: response.book_id
                    }
                    console.log(myAuthors)
                    console.log(id)
                    $.ajax({
                        method: "POST",
                        url: '/authorbook',
                        data: JSON.stringify(myAuthors),
                        contentType: "application/json"
                    }).then(response => {
                      window.location = "/books.html"

                    })
                });
            });
    });
})
