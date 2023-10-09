$(function(){

  // url에서의 각 데이터 가져오기
  var urlParams = new URLSearchParams(window.location.search);
  // urlParams에서 orders라는 객체 가져오기(JSON형식 변환시 이름이 orders)
  var ordersParam = urlParams.get('orders');

  if (ordersParam) {
    // JSON => JS 객체로 변환
    var orderInfo = JSON.parse(ordersParam);

    // 주문 내용을 테이블에 추가합니다.
    var table = $('#orderListCheckTable');
    // 총 주문 금액
    var total = 0;

    for (var i = 0; i < orderInfo.length; i++) {
      var name = orderInfo[i].name;
      var price = orderInfo[i].price;
      var count = orderInfo[i].count;

      var tr = $('<tr>');
      tr.append($('<td>').text(name));
      tr.append($('<td>').text(price));
      tr.append($('<td>').text(count));

      table.append(tr);
       // 주문 항목의 가격을 총합에 더합니다.
       total += price * count;
    }
     // 총합을 표시합니다.
     $('#totalValue').text(total);
  }

  // 결제 버튼
  $('#payBtn').on('click',function(){
    alert("결제 완료되었습니다.");
    // 결제 창 닫기
    window.close();

  })


});