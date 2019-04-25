$(function () {
    $('.gotzhuanji_nav>ul>li').mouseenter(function () {
        $(this).addClass('forum_actiyty').siblings().removeClass("forum_actiyty");
        var idx = $(this).index(".gotzhuanji_nav>ul>li");
        $('.gotzhuanji_content1').eq(idx).show().siblings().hide();
    })
});
