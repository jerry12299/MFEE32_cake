

// 主要用於在網頁中跳轉到指定的錨點位置
function scrollToAnchor(aid) {
  // 使用 $("a[name='" + aid + "']") 語句查找錨點標籤
  var aTag = $("a[name='" + aid + "']");
  // aTag.offset().top 屬性來獲取標籤的實際位置，並將它作為 scrollTop 的值。
  $('html,body').animate({ scrollTop: aTag.offset().top }, 300);
}
$("#gopay").click(function () {
  scrollToAnchor('payorder');
});

$("#gosuccess").click(function () {
  window.scrollTo(0, 0);
});

// -----------------點擊切換----------------------
// 取得按鈕和要顯示的區塊
const gopaybtn = document.getElementById('gopay');
const gosuccessbtn = document.getElementById('buyItem');

const hiddenPay = document.getElementById('Shopping_Pay');
const hiddenOrder = document.getElementById('Shopping_order');
const hiddenShoppingcar = document.getElementById('Shopping_body');
const hiddenSuccess = document.getElementById('Shopping_success');

const step1 = document.getElementById('Step1')
const step2 = document.getElementById('Step2')
const step3 = document.getElementById('Step3')
const stepC1 = document.getElementById('Step1_c')
const stepC2 = document.getElementById('Step2_c')
const stepC3 = document.getElementById('Step3_c')

// 綁定點擊事件
gopaybtn.addEventListener('click', function () {
  // 切換區塊的顯示狀態
  if (hiddenPay.classList.contains('hidden')) {
    hiddenPay.classList.remove('hidden');
    hiddenOrder.classList.remove('hidden');
    stepC1.classList.remove('check');
    step1.classList.add('uncheck');
    stepC2.classList.add('check');
    step2.classList.remove('uncheck');
  } 
});
gosuccessbtn.addEventListener('click', function () {
  // 切換區塊的顯示狀態
  if (hiddenSuccess.classList.contains('hidden')) {
    hiddenPay.classList.add('hidden');
    hiddenOrder.classList.add('hidden');
    hiddenShoppingcar.classList.add('hidden');
    hiddenSuccess.classList.remove('hidden');
    stepC2.classList.remove('check');
    step2.classList.add('uncheck');
    stepC3.classList.add('check');
    step3.classList.remove('uncheck');

  }
});

