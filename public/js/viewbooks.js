
$(document).ready(function() {
    $.ajax({
          method: 'GET',
          url: `https://jreads.herokuapp.com/book`,
          contentType: "application/json",
          data: JSON.stringify()
      }).then(function(data) {
          console.log(data)
          for (var j = 0; j < data.length; j++) {
                  $('.bookTitle').append('<tr><td>' + data[j].title + '</tr></td>');
              }

      });

});
