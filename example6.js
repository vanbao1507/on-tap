$(document).ready(function() {
    $('#postForm').submit(function(event) {
        event.preventDefault(); // Ngăn chặn submit form theo mặc định

        // Lấy dữ liệu từ form
        var title = $('#title').val();
        var body = $('#body').val();

        // Gọi API để thêm bài viết
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: JSON.stringify({
                title: title,
                body: body,
                // userId: 1 // Bạn có thể thay đổi userId nếu muốn
            }),
            contentType: "application/json; charset=utf-8",
            success: function(data) {
                alert("du lieu them thanh cong")
            },
            error: function(error) {
                console.error('Lỗi khi thêm bài viết:', error);
                alert("du lieu them that bai")
            }
        });
    });
});
