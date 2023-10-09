/**
 * 
 */
$(function(){


    $('.accordion').each(function() {
        // console.log($(this));
        var allDt = $(this).find('dt');
        var allDd = $(this).find('dd');
        // console.log(allDt);
        // console.log(allDd);

        // 전체를 닫아 놓고
        allDd.hide();
        // 첫번째 거만 띄우기
        allDd.first().show();
        // 손가락 모양해주기
        allDt.css({ 'cursor' : 'pointer' });

        // 눌러진 애의 다음 요소만 열어주기
        
        // 타이틀(dt)에서 클릭 이벤트 발생 시
        // 전체 내용을 (dd) 전부 안 보이기
        // 이벤트가 발생한 다음 내용 보이기
        allDt.click(function(){
            allDd.hide();
            // $(this).next().show();
            $(this).next().toggle();
        })


    })
})