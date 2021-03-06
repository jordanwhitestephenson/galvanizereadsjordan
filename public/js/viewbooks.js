$(document).ready(function() {
    $('.modal').modal();
    $('#modal1').modal('open');


    $.ajax({
        method: 'GET',
        url: '/book',
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(data) {
        console.log(data)

        for (var j = 0; j < data.length; j++) {
            if (data[j].cover_img_url === null) {
                $('.bookBody').append(`<tr class = "bookRow">
                <td> <img src = "img/image-not-found.jpg" class = "authorPhoto"></td>

                <td class = "bookdata"> ${data[j].title} </td>
                <td class = "bookdata"> ${data[j].genre} </td>

                <td class = "bookdata" id = "shortDescription">
                <p class="post-meta" id = "shortsentence"> ${data[j].description} </p></td>

                <td><button type="button" class ="viewBookAuthors" id = ${data[j].id}>
                <a id=${data[j].id}> Authors </a>
                </button></td>

                  <td><button type="button" class ="editBook" id=${data[j].id}>
                  <a id=${data[j].id} class= "editBook"> Edit </a></button></td>

                <td><button type="button" class ="deleteBook" id = ${data[j].id}>
                <a id=${data[j].id}> X </a>
                </button></td>

                <tr>`)
            } else {

                $('.bookBody').append(`<tr class = "bookRow"><td> <img src= "${data[j].cover_img_url}" class = "authorPhoto"></td>

                <td class = "bookdata"> ${data[j].title} </td><td class = "bookdata"> ${data[j].genre} </td> <td class = "bookdata" id = "shortDescription"><p class="post-meta" id = "shortsentence"> ${data[j].description} </p></td>

                <td><button type="button" class ="viewBookAuthors" id = ${data[j].id}>
                <a id=${data[j].id}> Authors </a>
                </button></td>

                <td><button type="button" class ="editBook" id=${data[j].id}>
                <a id=${data[j].id} class= "editBook"> Edit </a></button></td>

                <td><button type="button" class ="deleteBook" id = ${data[j].id}>
                <a id=${data[j].id}> X </a>
                </button></td>


                <tr>`)
            }
        }

        // <---EDIT BOOK-->
        $('.editBook').on('click', function(e) {
            console.log('YOU CICKES')
            e.preventDefault();
            var id = $(this).attr('id');
            window.location = `/editbook.html?id=${id}`
        });
    });


    //View Authors//
    $(document).on('click','.viewBookAuthors', function(e) {
        e.preventDefault();
        console.log('you clicked on', id)
        var id = $(this).attr('id');
        window.location = `/bookauthors.html?id=${id}`
      })


// <--DELETE A BOOK-->
$(document).on('click', ".deleteBook", function(e) {
console.log('YA!')
e.preventDefault();
var deleteID = $(this).find('a').attr('id');
console.log(deleteID);
$.ajax({
        method: "DELETE",
        url: `/book/${deleteID}`,
        contentType: "application/json"
    })
    .then(response => {
        location.href = location.href
        window.location = "/books.html"


        console.log('YOU DELETED', deleteID)
    })
});
});
