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

            $('.bookBody').append(`<tr class = "bookRow"><td class = "bookdata"> ${data[j].title} </td><td class = "bookdata"> ${data[j].genre} </td> <td class = "bookdata" id = "shortDescription"><p class="post-meta" id = "shortsentence"> ${data[j].description} </p></td>
            <td> <a href = "${data[j].cover_img_url}">View</a> </td>

                  <td><button type="button" class ="editBook" id=${data[j].id}>
                  <a id=${data[j].id} class= "editBook"> Edit </a></button>

                <button type="button" class ="deleteBook" id = ${data[j].id}>
                <a id=${data[j].id}> X </a>
                </button><tr>`)

        }
        $('.editBook').on('click', function(e) {
            console.log('YOU CICKES')
            e.preventDefault();
            var id = $(this).attr('id');
            window.location = `/editbook.html?id=${id}`
        });
    });



});
