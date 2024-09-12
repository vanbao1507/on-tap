$(document).ready(function() {
    $('#deleteButton').click(function() {
        // lấy id cần xoá
        var postId = $('#postId').val();

        // check Id có trống không
        if (!postId) {
            alert('Vui lòng nhập ID bài viết');
            return;
        }

        // Gọi API để xóa 
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            method: 'DELETE',
            success: function(response) {
                alert("du lieu xoa thanh công")
            },
            error: function(error) {
                alert("du lieu xoa that bại")
            }
        });
    });
});