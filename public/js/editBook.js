$(document).ready(function() {

    var myLocation = decodeURIComponent(window.location.search).split("=")[1]

    $.ajax({
        method: 'GET',
        url: `/book/${myLocation}`,
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(success) {
        console.log(success)
        $('#book_title').val(success.title)
        $('#book_genre').val(success.genre)
        $('#book_discription').val(success.description)
    });


    $('#blogEditButton').on('click', function(event) {
        event.preventDefault();
        myEdittedBlogPost = {
            id: `${myLocation}`,
            name: $('#nameBlog').val(),
            title: $('#titleBlog').val(),
            body: $('#bodyBlog').val()
        };
        console.log(myEdittedBlogPost.title)
        console.log(myEdittedBlogPost.body)
        $.ajax({
                method: "PUT",
                url: `/blogroute/${myLocation}`,
                data: JSON.stringify(myEdittedBlogPost),
                contentType: "application/json"
            })
            .then(response => {
                window.location = "/index.html";
            });
    });
})
