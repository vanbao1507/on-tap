
function loadPosts(){
    $.ajax({
             url: 'https://jsonplaceholder.typicode.com/posts',
              method: 'GET',
              success: function(data) {
                        $('#postList').empty();
                        s
                for (var i = 0; i < data.length; i++) {
                    $('#postList').append('<li>' + data[i].title + '</li>');
                }
                    },
                    error: function(error) {
                        console.error('Lỗi khi gọi API:', error);
                    }
                });
}