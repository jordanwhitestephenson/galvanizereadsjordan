
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
                  $('.bookOverview').append('<tr>' + '<td class ="bookdata">' + data[j].title + '</tr>' +  '<td class= "bookdata">' + data[j].genre  + '</td></tr>');
                  $('.bookGenre').append('<tr>' + '<td class = "bookdata">' + data[j].genre + '</tr>' + '</td>')
                  $('.bookDescription').append('<tr id = "shortsentence">' + '<td class = "bookdata" id= "shortsentence">' + data[j].description + '</tr>' + '</td>')
                  $('.bookImg').append('<tr>' + '<td class = "bookdata">' + data[j].cover_img_url+ '</tr>' + '</td>')
              }

      });

});
