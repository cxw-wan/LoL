

//热门活动隐藏条效果
$(function () {
    $('.forum-nav>ul>li').mouseenter(function () {
        $(this).addClass('forum_actiyty').siblings().removeClass("forum_actiyty");
        var idx = $(this).index(".forum-nav>ul>li");
        $('.forum_content1').eq(idx).show().siblings().hide();
    })
});

