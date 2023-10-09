/**
 * 
 */
$(function(){
  // 수량 버튼을 클릭하면 해당 메뉴가 주문 내역에 나오도록
  // 가격은 총합의 input에 나오도록
  
  // console.log(gold_name);
  // plus 버튼
  // let orderlist = {};
  
  var total = 0;
  // plus 버튼
  $('tr.menus td.menu button#plus').on('click',function(e){
    e.preventDefault();
    var gold_name = $(this).prev().prev().prev().text();
    var price = parseInt($(this).closest('td.menu').find('span[data-value]:eq(1)').attr('data-value'));

    var tr = $('<tr />');
    var td1 = $(`<td id="name" data-value=${gold_name} name=${gold_name}/>`);
    var td2 = $(`<td id="price" data-value=${price} name=${price}/>`);
    var td3 = $('<td id="count" data-value="1"/>');
    var td4 = $('<td />');

    // 테이블에 있는 행인지 확안
    var orderlist = $('#listTable tr:contains(' + gold_name + ')');
    // console.log(orderlist);
    if (orderlist.length > 0) {
      // 이미 주문 내역에 있는 경우 수량을 증가
      var countCell = orderlist.find('td#count');
      var count = parseInt(countCell.text()) + 1;
      countCell.text(count);
      countCell.attr('data-value', `${count}`);
      countCell.attr('name', `${count}`);

    } else {
      // 주문 내역에 없는 경우, 새로운 메뉴 정보를 추가
      tr.append(td1.append(gold_name));
      tr.append(td2.append(price));
      tr.append(td3.append(1));
      tr.append(td4.append('<input type="button" value="삭제" class="delBtn" />'));
      $('#listTable').append(tr);
    }
    // 총합 계산

    total += price;
    // console.log(price);
    $('#totalDiv > #total').val(total);
   
  });
  
  // minus 버튼 -> 총합이 0일 때는 총합이 마이너스가 안되게
  $('tr.menus td.menu button#minus').on('click',function(){
    var gold_name = $(this).prev().prev().prev().prev().text();
    var price = parseInt($(this).prev().prev().prev().attr('data-value'));
    var orderlist = $('#listTable tr:contains(' + gold_name + ')');
    if (orderlist.length > 0) {
    if (total > 0) {
    // 테이블에 있는 행인지 확안
    // console.log(orderlist);
      // 이미 주문 내역에 있는 경우 수량을 감소
      var countCell = orderlist.find('td#count');
      var mcount = parseInt(countCell.text()) - 1;
      // 메뉴 갯수가 0 이하로 되지 않도록 조정
      mcount = Math.max(mcount, 0);

      countCell.text(mcount);
      countCell.attr('data-value',`${mcount}`);

    }
    if(mcount == 0) {
      // 행 자동 삭제
      orderlist.remove();
    }
    
    // console.log(price);
    total -= price;
    $('#totalDiv > #total').val(total);
  }

  });

   // 삭제 버튼
   $('#listTable').on('click', 'input.delBtn',function(){
    var row = $(this).closest('tr');
    // console.log(row);
    // data-value 속성을 사용하여 가격을 가져옵니다
    var rowprice = parseInt(row.find('td#price').attr('data-value'));
    var rowcount = parseInt(row.find('td#count').attr('data-value'));
    total -= rowprice*rowcount;
    $('#totalDiv > #total').val(total);
    row.remove();
  })

  // 주문버튼
    // COMMING SOON
    // $('#btn').on('click',function(){
    //   alert('영업 준비 중');
    //   setTimeout(function(){
    //     alert('COMMING SOON!');
    //   },2000)
    // })
    $('#orderBtn').on('click', function () {
      // 주문 내역 테이블의 있는 내용으로 배열 객체 만들기
      var orderInfo = [];
      // gr(i) : 인덱스 i 다음 요소에서 찾기
      $('#listTable tr:gt(2)').each(function () {
        var name = $(this).find('td#name').attr('data-value');
        var price = $(this).find('td#price').attr('data-value');
        var count = $(this).find('td#count').attr('data-value');
        // 배열 객체에 각 변수 넣기
        orderInfo.push({ name: name, price: price, count: count });
      });
    
      // 주문 정보를 JSON 문자열로 변환합니다.
      // JSON 하나의 객체인데 여러 데이터 타입을 담을 수 있다.
      // JS 객체 => JSON 형식으로 변환
      var orderInfoJSON = JSON.stringify(orderInfo);
    
      // URL 파라미터로 주문 정보를 추가합니다.
      var queryParams = $.param({ orders: orderInfoJSON });
    
      // 쿼리 문자열을 포함하여 'pay.html'로 이동합니다.
      var url = 'pay.html?' + queryParams;
      // 새 창으로 열기
      window.open(url, '_blank', 'width=600,height=400');
    });


  


});



 


  
