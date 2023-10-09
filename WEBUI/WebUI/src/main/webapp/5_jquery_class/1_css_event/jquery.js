/**
 * 
 */

$(document).ready(function() {
    // $('#celebs tbody tr:even').css({'background' : '#DDCCBB'})

    $('#celebs tr:even').addClass('table_striping');


    // 마우스가 올라갔을 때 다른 색상 부여
    // 1) mouseenter - mouseleave
    // 2) mouseover  - mouseout
    // 3. hover

    $('.data tbody tr').hover(function() {
        $(this).addClass('td_mouseover');
    }, function() {
        
        $(this).removeClass('td_mouseover');
    })

    /*
        - show() / hide()
        - fadeIn() / fadeOut()
        - slideDown() / slideUp()
    */
    $('#hideButton').click(function() {
        $('img').slideUp('slow');
    })
    $('#showButton').click(function() {
        $('img').slideDown('fast');
    })
    $('#toggleButton').click(function() {
        // $('img').toggle('slow');
        // toggl() / fadeToggle() / slideToggle()

        var img = $('#intro img');
        if(img.is(':visible')) {
            img.hide();
        } else {
            img.show();
        }
    })






});