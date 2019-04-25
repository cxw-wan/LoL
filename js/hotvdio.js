
$(function () {
    //最热视频隐藏条效果
    $('.hotvdio_nav>ul>li').mouseenter(function () {
        $(this).addClass('forum_actiyty').siblings().removeClass("forum_actiyty");
        var idx = $(this).index(".hotvdio_nav>ul>li");
        $('.hotvdio_content1').eq(idx).show().siblings().hide();
    })
    //经过图片显示播放按钮

    $('.hotvdio_content1>ul>li').mouseenter(function(){
        $(this).children('.hotvdio_content1_hover').show();
        $(this).children().eq(1).css("color","#0da0b4");
    })
    $('.hotvdio_content1>ul>li').mouseleave(function(){
        $(this).children('.hotvdio_content1_hover').hide();
        $(this).children().eq(1).css("color","");
    })
});