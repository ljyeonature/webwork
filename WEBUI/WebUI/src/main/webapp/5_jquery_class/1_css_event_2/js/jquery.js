/**
 * 
 */

$(function() {

    $('ul.menu a.rollover > img').hover(function(){
        // 마우스가 올라갔을 때
        // img 요소에 src 속성값을 변경(hint : attr())
        // 글자변경(대체) : replace
        // var imgsrc = $(this).attr('src');
        // console.log(imgsrc);
        // var aftersrc = imgsrc.replace('_off', '_on');
        // console.log(aftersrc)
        // $(this).attr('src', $(this).attr('src').replace('_off', '_on'));

        var imgsrc = $(this).attr('src');
        var imgIndex = imgsrc[10];
        console.log(imgIndex);
        
        if(imgIndex == 1) {
            
        }
        
    }, function(){
        $(this).attr('src', $(this).attr('src').replace('_on', '_off'));

    })



});