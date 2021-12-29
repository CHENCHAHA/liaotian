$(function() {
    var username = localStorage.getItem('token')
    console.log(username);
    if (username === null) {
        alert('请登录，你没有权限访问!')
        window.location.href = '../ht/index.html'
    } else {
        $.ajax({
            type: "post",
            url: "http://127.0.0.1/haoyou",
            data: { username },
            success: function(res) {
                console.log(res);
                xuanruan(res)
            }
        });


        function xuanruan(data) {
            /* for (var i = 0; i < data.length; i++) { */
            var str = '<li id="frist"><img src="' + data.haoyou_touxiang + '"><span>' + data.haoyou_name + '</span></li>'
            $('.lie ul').append(str);
            /*  } */
        }
        $('.lie ul').on('click', '#frist', function() {

            window.location.href = '../ht/liaotian.html'
        })
    }

})