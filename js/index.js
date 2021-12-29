$(function() {
    $('#zhuce').on('click', function() {
        $('#frist').addClass('none').removeClass('block')
        $('#tow').addClass('block').removeClass('none')
        $('#denglu').addClass('block').removeClass('none')

    })
    $('#denglu').on('click', function() {
        $('#tow').addClass('none').removeClass('block')
        $('#frist').addClass('block').removeClass('none')
        $('#zhuce').addClass('block').removeClass('none')
        $('#denglu').addClass('none').removeClass('block')

    })
    $('#btnlogin').on('click', function() {
            const username = $('.username').val()
            const password = $('.password').val()
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/login",
                data: { username, password },
                success: function(res) {
                    if (res.status == 1) {
                        $('.total').addClass('block').removeClass('none').append(res.message)
                        $("#btnlogin").attr("disabled", true);
                        setTimeout(function() {
                            $('.total').addClass('none').removeClass('block').html('')
                            $("#btnlogin").attr("disabled", false);
                        }, 2000)
                    } else {
                        //登录成功,跳转页面
                        console.log(res.username);

                        localStorage.removeItem('token')
                        localStorage.setItem('token', username)
                        window.location.href = '../ht/login.html'

                    }
                }
            });
        })
        //注册执行代码
    $('#btnzhu').on('click', function() {
            const username = $('.username1').val()
            const password = $('.password1').val()
            console.log(username, password);
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/zhuce",
                data: { username, password },
                success: function(res) {
                    console.log(res);
                    if (res.status == 1 || res.status == 0) {
                        $('.total').addClass('block').removeClass('none').append(res.message)
                        $("#btnzhu").attr("disabled", true);
                        setTimeout(function() {
                            $('.total').addClass('none').removeClass('block').html('')
                            $("#btnzhu").attr("disabled", false);
                        }, 2000)
                    }
                }
            });
        })
        //切换头像
    $('.username').on('change', function() {
        if ($(this).val() == 2499443165) {
            $('.ben').addClass('block').removeClass('none')
            $('.dui').addClass('none').removeClass('block')
        }
        if ($(this).val() == 2499443166) {
            $('.dui').addClass('block').removeClass('none')
            $('.ben').addClass('none').removeClass('block')
        }
    })
})