$(function(){
    //鼠标移入修改图片,移除还原图片  index519行
    $('.edition_left_l_2').mouseenter(function(){
        $(this).children().attr("src","image/edition6.jpg");
    })
    $('.edition_left_l_2').mouseleave(function(){
        $(this).children().attr("src","image/edition5.jpg");
    });

    //鼠标移入显示 移除隐藏
    $('.edition_left_r_2').mouseenter(function(){
        $('.edition_left_r_2_hover').show();
    })
    $('.edition_left_r_2').mouseleave(function(){
        $('.edition_left_r_2_hover').hide();
    })

    $('.edition_left_r_2_hover').mouseenter(function(){
        $(this).show();
    })
    $('.edition_left_r_2_hover').mouseleave(function(){
        $(this).hide();
    })

    //鼠标移入放大  移除变下
    $('.hot_img ul li').mouseenter(function(){
        $(this).children('.hot_img_img').children('img').css("transform","scale(1.05)"); 
        
        $(this).children('.hot_img_img').children('img').css("transition","all 0.6s"); 
    })
    $('.hot_img ul li').mouseleave(function(){
        $(this).children('.hot_img_img').children('img').css("transform","scale(1)"); 
    })
    //鼠标经过播放视频
    $('.edition_img2').mouseenter(function(){
        $('.edition_img2_hover').show();
        $('.hot_hover').show();
    })
    
    $('.edition_img2_hover').mouseenter(function(){
        $('.hot_hover').show()
    })
    $('.edition_img2_hover').mouseleave(function(){
        $(this).hide();
        $('.hot_hover').hide()
    })
    $('.hot_hover').mouseenter(function(){
        $(this).show();
        $('.edition_img2_hover').show();
    })
    $('.hot_hover').mouseleave(function(){
        $(this).hide();
        $('.edition_img2_hover').hide();
    })
})