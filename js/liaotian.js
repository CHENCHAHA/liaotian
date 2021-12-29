$(function() {
    var username = localStorage.getItem('token')
    console.log(username);
    if (username === null) {
        window.location.href = '../ht/index.html'
    } else {
        //获取聊天记录
        //判断为那个用户的界面
        if (username == '2499443165') {
            $('.he').html('张三')
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/jilu",
                data: { username },
                success: function(res) {
                    console.log(res.jilu);
                    for (var i = 0; i < res.jilu.length; i++) {
                        console.log(res.jilu.length);
                        console.log(res.jilu[i].username);
                        if (res.jilu[i].username == '2499443165') {
                            console.log(666666);
                            //将其聊天记录渲染到界面
                            var str = '<img src="../images/sculpture.jpeg" alt=""><span>' + res.jilu[i].jilu + '</span><br>'
                            $('.lie').append(str);
                        }
                        if (res.jilu[i].username == '2499443166') {
                            console.log(666666);
                            //将其聊天记录渲染到界面
                            var str = '<img src="../images/duifang.jpeg" alt=""><span>' + res.jilu[i].jilu + '</span><br>'
                            $('.lie').append(str);
                        }
                    }
                }
            });
        }
        if (username == '2499443166') {
            $('.he').html('李澄瑶')
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/jilu",
                data: { username },
                success: function(res) {
                    console.log(res.jilu);
                    for (var i = 0; i < res.jilu.length; i++) {
                        console.log(res.jilu.length);
                        console.log(res.jilu[i].username);
                        if (res.jilu[i].username == '2499443165') {
                            console.log(666666);
                            //将其聊天记录渲染到界面
                            var str = '<img src="../images/sculpture.jpeg" alt=""><span>' + res.jilu[i].jilu + '</span><br>'
                            $('.lie').append(str);
                        }
                        if (res.jilu[i].username == '2499443166') {
                            console.log(666666);
                            //将其聊天记录渲染到界面
                            var str = '<img src="../images/duifang.jpeg" alt=""><span>' + res.jilu[i].jilu + '</span><br>'
                            $('.lie').append(str);
                        }
                    }
                }
            });
        }

        $('.ipttext').on('input', function() {
            if ($(this).val() != '') {
                console.log(666);
                $('.shuru button').css('background-color', '#00cafc')
            } else {
                $('.shuru button').css('background-color', '#b1effe')
            }
        })
        $('.fasong').on('click', function() {
            var jilu = $('.ipttext').val()
            $('.ipttext').val('')
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/cunchu",
                data: { username, jilu },
                success: function(res) {
                    console.log(res);
                    //清除界面上的内容
                    $('.lie').html('')
                    if (username == '2499443165') {

                        $.ajax({
                            type: "post",
                            url: "http://127.0.0.1/jilu",
                            data: { username },
                            success: function(res) {
                                console.log(res.jilu);
                                for (var i = 0; i < res.jilu.length; i++) {
                                    console.log(res.jilu.length);
                                    console.log(res.jilu[i].username);
                                    if (res.jilu[i].username == '2499443165') {
                                        console.log(666666);
                                        //将其聊天记录渲染到界面
                                        var str = '<img src="../images/sculpture.jpeg" alt=""><span>' + res.jilu[i].jilu + '</span><br>'
                                        $('.lie').append(str);
                                    }
                                    if (res.jilu[i].username == '2499443166') {
                                        console.log(666666);
                                        //将其聊天记录渲染到界面
                                        var str = '<img src="../images/duifang.jpeg" alt=""><span>' + res.jilu[i].jilu + '</span><br>'
                                        $('.lie').append(str);
                                    }
                                }
                            }
                        });
                    }
                    if (username == '2499443166') {

                        $.ajax({
                            type: "post",
                            url: "http://127.0.0.1/jilu",
                            data: { username },
                            success: function(res) {
                                console.log(res.jilu);
                                for (var i = 0; i < res.jilu.length; i++) {
                                    console.log(res.jilu.length);
                                    console.log(res.jilu[i].username);
                                    if (res.jilu[i].username == '2499443165') {
                                        console.log(666666);
                                        //将其聊天记录渲染到界面
                                        var str = '<img src="../images/sculpture.jpeg" alt=""><span>' + res.jilu[i].jilu + '</span><br>'
                                        $('.lie').append(str);
                                    }
                                    if (res.jilu[i].username == '2499443166') {
                                        console.log(666666);
                                        //将其聊天记录渲染到界面
                                        var str = '<img src="../images/duifang.jpeg" alt=""><span>' + res.jilu[i].jilu + '</span><br>'
                                        $('.lie').append(str);
                                    }
                                }
                            }
                        });
                    }

                }
            });
        })
    }

})