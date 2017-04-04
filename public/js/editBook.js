$(document).ready(function() {

    var myLocation = decodeURIComponent(window.location.search).split("=")[1];

    $.ajax({
        method: 'GET',
        url: `/book/${myLocation}`,
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(success) {
        console.log(success);
        $('#book_title').val(success.title);
        $('#book_genre').val(success.genre);
        $('#book_discription').val(success.description);
    });

    $.ajax({
        method: 'GET',
        url: `/authorbook`,
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(success) {
        for (i = 0; i < success.length; i++) {
          console.log(success);
          console.log(myLocation)
                if (success[i].book_id === myLocation) {
                    console.log('YA WEVE SUCCEDED')
                    $.ajax({
                        method: 'GET',
                        url: `/author/${succss.author_id}`,
                        contentType: "application/json",
                        data: JSON.stringify()
                    }).then(function(author) {
                      console.log(author)
                })
            }

                else {
                  console.log ('well fuck');
                }
              }
            });
          });
