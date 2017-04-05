$(document).ready(function() {

    var myLocation = decodeURIComponent(window.location.search).split("=")[1];

    $.ajax({
        method: 'GET',
        url: `/author/${myLocation}`,
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(success) {
        console.log(success);
        $('#author_firstname').val(success.first_name);
        $('#author_lastname').val(success.last_name);
        $('#author_bio').val(success.bio);
        $('#author_photo').attr("src", success.img_url);


    });



    $('#submitAuthorEdit').on('click', function(event) {
            event.preventDefault();
            myEdittedAuthor = {

                first_name: $('#author_firstname').val(),
                last_name: $('#author_lastname').val(),
                bio: $('#author_bio').val()
            };
            console.log(myEdittedAuthor)
            $.ajax({
                    method: "PUT",
                    url: `/author/${myLocation}`,
                    data: JSON.stringify(myEdittedAuthor),
                    contentType: "application/json"
                })
                .then(response => {
                    window.location = "/authors.html";
                });
        });



});
