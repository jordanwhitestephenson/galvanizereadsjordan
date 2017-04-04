// <<<VIEW AUTHORS>>>>

$(document).ready(function() {


    $.ajax({
        method: 'GET',
        url: '/author',
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(data) {
        console.log(data);
        for (var j = 0; j < data.length; j++) {
          if (data[j].img_url === null) {
            $('.authorBody').append(`<tr class = "authorOverview">
            <td> <img src = "img/image-not-found.jpg" class = "authorPhoto"></td>
            <td class = "bookdata"> ${data[j].first_name} </td><td class = "bookdata"> ${data[j].last_name} </td> <td class = "bookdata" id = "shortDescription"><p class="post-meta" id = "shortsentence"> ${data[j].bio} </p></td>
             </td>

            <td><p>Filler</p></td>

            <td><button type="button" class ="deleteBook" id = ${data[j].id}>
            <a id=${data[j].id}> X </a>
            </button></td><tr>`);

            } else {
                $('.authorBody').append(`<tr class = "authorOverview">

                <td> <img src = "${data[j].img_url}" class = "authorPhoto"></td>

                <td class = "bookdata"> ${data[j].first_name} </td><td class = "bookdata"> ${data[j].last_name} </td> <td class = "bookdata" id = "shortDescription"><p class="post-meta" id = "shortsentence"> ${data[j].bio} </p></td>
                </td>
                <td><p>Filler</p></td>

                <td><button type="button" class ="deleteBook" id = ${data[j].id}>
                <a id=${data[j].id}> X </a>
                </button></td><tr>`);

            }
        }
    })
    console.log('WHERE THE HEL AR YOU')

    $(document).on('click', ".deleteBook", function(e){
      console.log('YA!')
        e.preventDefault();
        var deleteID = $(this).find('a').attr('id');
        console.log(deleteID);
        $.ajax({
                method: "DELETE",
                url: `/author/${deleteID}`,
                contentType: "application/json"
            })
            .then(response => {
                window.location.reload(true);
            });
          });
    })
