$(function () {

    //鼠标移入li向上移10个像素  activity——hover显示
    $('.activity_content1 ul li').mouseenter(function () {
        $(this).css("margin-top", "-10px");
        $(this).css("transition", "all 0.5s");
        var achover = $(this).children().next('.activity_hover')
        $(achover).show();

        //鼠标移出li向下移10个像素  activity——hover隐藏
        $(achover).mouseleave(function () {
            $(this).hide();
            var achoverfd = $(this).parents('.activity_content1 ul li');
            $(achoverfd).css("margin-top", "0px")
        })
    });

    $('.activity_content1 ul li').mouseleave(function () {
        $(this).css("margin-top", "0px");
        var achover = $(this).children().next('.activity_hover');
        $(achover).hide();
    })

    $('.activity_nav>ul>li').mouseenter(function () {
        $(this).addClass('forum_actiyty').siblings().removeClass("forum_actiyty");
        var idx = $(this).index(".activity_nav>ul>li");
        $('.activity_content1').eq(idx).show().siblings().hide();
    })

    
})