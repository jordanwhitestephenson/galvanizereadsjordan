
$(document).ready(function() {
    $.ajax({
          method: 'GET',
          url: `https://jreads.herokuapp.com/book`,
          contentType: "application/json",
          data: JSON.stringify()
      }).then(function(data) {
          console.log(data)
          for (var j = 0; j < data.length; j++) {
                  $('.bookTitle').append('<tr>' + '<td class ="bookdata">' + data[j].title + '</tr>' + '</td>');
                  $('.bookGenre').append('<tr>' + '<td class = "bookdata">' + data[j].genre + '</tr>' + '</td>')
                  $('.bookDescription').append('<tr>' + '<td class = "bookdata">' + data[j].description+ '</tr>' + '</td>')
                  $('.bookImg').append('<tr>' + '<td class = "bookdata">' + data[j].cover_img_url+ '</tr>' + '</td>')
              }

      });

});
