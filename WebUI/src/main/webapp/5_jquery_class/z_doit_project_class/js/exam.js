$(function(){
  

  // 1. 날짜 출력
  var date = new Date();
  $('p#date_wrap > span.year').text(date.getFullYear());
  // 날짜를 2글자로 출력 : 문자열 00를 월이나 일을 문자열로 바꿔서 추가 후,
  // 뒤에서 2글자 가져오기(009 => 09)
  $('p#date_wrap > span.month').text(("00" + (date.getMonth()+1).toString()).slice(-2));
  $('p#date_wrap > span.date').text(("00" + (date.getDate()).toString()).slice(-2));

  // 2. 검색어를 입력하세요
    // 1) 폼을 클릭했을 때, 검색어를 입력하세요 사라지게 하기
    $('#keyword').focus(function(){
      $(this).css({'background' : 'url("")' })
    })
    // 2) 폼이 아닌 다른 곳을 클릭했을 때, 검색어를 입력하세요 다시 뜨게 하기
    $('#keyword').blur(function(){
      $(this).css({'background' : 'url("images/sch_guide.gif") no-repeat' })
    })
  
    // 3. 탭메뉴 : 공지사항 / 질문과답변 / 저자문의
    // dt의 질문과답변과 저자 문의에 out 클래스명 추가
    $('dl#tabmenu > dt:not(:first) > a > img').addClass('out');
    // dt의 공지사항에 over 클래스명 추가
    $('dl#tabmenu > dt:first > a > img').addClass('over');
    // 클래스가 out인 요소를 클릭하면,
    $('dl#tabmenu > dt > a ').on('click','.out',function(){
      // 클래스가 over인 요소 그림(탭) 바꾸고, ul부분 display:none
      var overClass = $('dl#tabmenu > dt > a > img.over');
      overClass.attr('src',overClass.attr('src').replace('_over','_out'));
      overClass.attr('class','out');
      overClass.parent().parent().next().css({'display' : 'none'});
      // 클래스가 out인 요소는 그림(탭) 바꾸고, ul부분 display:block
      $(this).parent().parent().next().css({'display' : 'block'});
      $(this).attr('src',$(this).attr('src').replace('_out','_over'));
      $(this).attr('class','over');
    });
  
    // 4. 베스트 BOOK -> bxSlider 
    $('div#best_bg').css({
      'width' : '900px',
      'left' : '5px',
      'padding-left' : '120px',
    })
    var slider = $('div#bestbook_zone div#best_bg ul').bxSlider({
      minSlides : 5,
      maxSlides : 5,
      moveSlides : 5,
      slideWidth : 120,
      slideMargin : 30,
      auto : true,
      autoHover: true,
    })
      // 1) 이전 버튼
      $('.prev_btn').on('click', function(){
        slider.goToPrevSlide();
        // <a> 링크 차단
        return false;
      })
      // 다음 버튼
      $('.next_btn').on('click', function(){
        slider.goToNextSlide();
        // <a> 링크 차단
        return false;
      })

    // 5. 로그인 창 뜨게 하기
    $('.login_wrap > a > img').click(function(){
      $('#login_f').css({ 'top' : '25px' })
    })
      // 1) CLOSE 닫기
      $('.login_close_btn > a > img').click(function(){
        $('#login_f').css({ 'top' : '-500px' })
      })
    
    // 6. 전체메뉴 누르면 창 뜨게 하기
    $('#total_btn > a > img').click(function(){
      $('#total_menu').css({ 'display' : 'block' })
    })
      // 1) CLOSE 닫기
      $('#total_close > a > img').click(function(){
        $('#total_menu').css({ 'display' : 'none' })
      })

    //=====================================================================

    // 7. 화면 크기 조절
    // 현재 화면 크기 가져오기
    // + 버튼 클릭 시 -> 10%씩 커지기
    var nowZoom = 100;
    $('.zoom_in').on('click',function(){
      nowZoom += 10;
      if(nowZoom > 200) nowZoom=200;
      $('body').css({ 'zoom' : `${nowZoom}%`});
    })
    // - 버튼 클릭 시 -> 10%씩 작아지기
    $('.zoom_out').on('click',function(){
      nowZoom -= 10;
      if(nowZoom = 25) nowZoom=25;
      $('body').css({ 'zoom' : `${nowZoom}%`});
    })
    // 100이 있는 버튼 클릭 시 -> 100%으로 초기화
    $('.zoom_return').on('click',function(){
      $('body').css({ 'zoom' : '100%'});
    })

    // 8. 프린트 그림 클릭 시 프린트할 수 있는 창 뜨기
    $('.print_btn').on('click',function(){
      window.print();
    })

    // 9. 알림판 1-2-3-4
    // active 클래스가 있는 이미지
    var activeClass = $('dt.roll_btn1 > a > img');
    $('div#roll_banner_wrap > dl > dt > a > img').on('setInterval',function(){
      activeClass.parent().removeClass('active');
      activeClass.attr('src',activeClass.attr('src').replace('_over','_out'));
      $(this).attr('src',$(this).attr('src').replace('_out','_over'));
      activeClass.parent().parent().next().hide();
      $(this).parent().parent().next().show();
      activeClass = $(this).parent().addClass('active').find('img');
    },1000)

})