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

             <td><button type="button" class ="authorBooks" id = ${data[j].id}>
             <a id=${data[j].id}> Books </a>
             </button></td>

            <td><button type="button" class ="editAuthor" id=${data[j].id}>
            <a id=${data[j].id} class= "editAuthor"> Edit </a></button></td>

            <td><button type="button" class ="deleteAuthor" id = ${data[j].id}>
              <a id=${data[j].id}> X </a>
              </button></td><tr>`);

            } else {
                $('.authorBody').append(`<tr class = "authorOverview">

                <td> <img src = "${data[j].img_url}" class = "authorPhoto"></td>

                <td class = "bookdata"> ${data[j].first_name} </td><td class = "bookdata"> ${data[j].last_name} </td> <td class = "bookdata" id = "shortDescription"><p class="post-meta" id = "shortsentence"> ${data[j].bio} </p></td>
                </td>

                <td><button type="button" class ="authorBooks" id = ${data[j].id}>
                <a id=${data[j].id}> Books </a>
                </button></td>

                <td><button type="button" class ="editAuthor" id=${data[j].id}>
                <a id=${data[j].id} class= "editAuthor"> Edit </a></button></td>

                <td><button type="button" class ="deleteAuthor" id = ${data[j].id}>
                <a id=${data[j].id}> X </a>
                </button></td><tr>`);

            }
        }
    });

    $(document).on('click', ".deleteAuthor", function(e){
      console.log('YA!');
        e.preventDefault();
        var deleteID = $(this).find('a').attr('id');
        console.log(deleteID);
        $.ajax({
                method: "DELETE",
                url: `/author/${deleteID}`,
                contentType: "application/json"
            })
            .then(response => {
               console.log('you deleted this authors', deleteID)
            });
          });
    });
// <---VIEW AUTHOR'S BOOKS-->
    $(document).on('click','.authorBooks', function(e) {
        e.preventDefault();
        console.log('you clicked on', id)
        var id = $(this).attr('id');
        window.location = `/authorsbooks.html?id=${id}`
      })
      $(document).on('click','.editAuthor', function(e) {
          e.preventDefault();
          console.log('editted author ID', id)
          var id = $(this).attr('id');
          window.location = `/editAuthor.html?id=${id}`
        })
