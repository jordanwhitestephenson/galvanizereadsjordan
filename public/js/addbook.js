$(document).ready(function() {

    $('#addBookButton').on('click', function(event) {
        event.preventDefault();
        myNewBook = {
            title: $('#book_title').val(),
            genre: $('#book_genre').val(),
            description: $('#book_discription').val()
        };

        console.log(myNewBook)
        $.ajax({
                method: "POST",
                url: '/book',
                data: JSON.stringify(myNewBook),
                contentType: "application/json"
            })
            .then(response => {
            });



        $.get('/author', function(data) {
          var authorLastName = $('#last_name').val()

          myNewAuthor = {
              first_name: $('#first_name').val(),
              last_name: $('#last_name').val()
          }

            
                    $.ajax({
                            method: "POST",
                            url: '/author',
                            data: JSON.stringify(myNewAuthor),
                            contentType: "application/json"
                        })
                        .then(response => {
                            window.location = "/books.html";
                        });

        });

    });

});
