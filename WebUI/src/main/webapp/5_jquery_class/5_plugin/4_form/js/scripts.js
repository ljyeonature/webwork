/**
 * 
 */
$(document).ready(function(){

    $('#signup  > form').validate({
        rules : {
            name : {required:true},
            email : {required : true, email : true},
            website : {url : true},
            password : {minlength : 6, maxlength : 12},
            passconf : {minlength: 6,  equalTo : '#password'}
        },
        success : function(label){
            label.addClass('valid');
            label.text('ok');
        }
    });

    // 체크박스 선택 여부 확인 ( attr() ex) prop() )
    // <input type='checkbox' > 체크를 선택하려면
    // <input type='checkbox' checked=true>
    // jquery 선택자 : checked
    
    
    // $('.check-all').on('click', function(){
    //     if($('.agree').attr('checked') === 'checked'){
    //         $('.agree').attr('checked',false);
    //         // console.log(12);
    //     }
    //     else {
    //         $('.agree').attr('checked',true);
    //         // alert($('.agree').attr('checked'))
    //     }
    // });
    
    // $('.agree').on('click',function(){
    //     if($('.agree'[checked]')) {
    //         $(this).attr('checked', false);
    //     } else {
    //         $(this).attr('checked', true);
    //     }
    // });

    //개별 선택에 따라 전체 선택 상태 변경
    var count = 0;
    $('div.stats > input.agree').each(function (){
    $(this).change(function (){
    if ($(this).prop('checked')){
        count ++;
    } else {
        count --;
    }
    if (count === 5){
        $('div.stats > input.check-all').prop('checked', true);
    } else {
        $('div.stats > input.check-all').prop('checked', false);
    }
    });
    });

    // 전체 선택에 따라 개별 선택 상태 변경
    $('div.stats > input.check-all').change(function (){
        if ($(this).prop('checked')){
    $('div.stats > input.agree').each(function (){
    $(this).prop('checked', true);
        count = 5;
    })
    } else {
    $('div.stats > input.agree').each(function (){
    $(this).prop('checked', false);
        count = 0;
    })
    }
    })






});
