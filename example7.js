$(document).ready(function() {

    $('#updateButton').click(function() {
        // Lấy giá trị từ các input
        var postId = $('#postId').val();
        var title = $('#title').val();
        var body = $('#body').val();

        // Gọi API để cập nhật bài viết
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            method: 'PUT',
            data: JSON.stringify({
                title: title,
                body: body
            }),
            contentType: 'application/json; charset=UTF-8',
            success: function(response) {
                alert("du lieu them thanh cong")
            },
            error: function(error) {
                alert("du lieu them that bai")
            }
        });
    });
});