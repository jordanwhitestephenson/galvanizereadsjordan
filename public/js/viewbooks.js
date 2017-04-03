
$(document).ready(function() {
    $.ajax({
          method: 'GET',
          url: `https://jreads.herokuapp.com/book`,
          contentType: "application/json",
          data: JSON.stringify()
      }).then(function(data) {
          console.log(data)
          // <p class="post-meta" id = "shortsentence"> ${data[i].body} </p>
          for (var j = 0; j < data.length; j++) {

                  $('.bookBody').append(`<tr class = "bookRow"><td class = "bookdata"> ${data[j].title} </td><td class = "bookdata"> ${data[j].genre} </td> <td class = "bookdata"> ${data[j].description} </td> <td class = "bookdata"> ${data[j].cover_img_url} </td><tr>`)

  
              }

      });

});
