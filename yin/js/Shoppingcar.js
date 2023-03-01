// nav上滑出現，下滑消失
let lastPos = 0
const nav = document.querySelector('nav');

// 監聽scroll事件
document.addEventListener('scroll',function(){
  let currentPos =  window.scrollY;
  //   往下滑
  if(currentPos > lastPos){
        nav.style.top = "-80px"; //讓nav bar消失
  }else{
    nav.style.top = "0px"; //讓nav bar出現
  }
  lastPos = currentPos;//再記住現在位置，跟未來的位置做比較
});


// 主要用於在網頁中跳轉到指定的錨點位置
function scrollToAnchor(aid) {
  // 使用 $("a[name='" + aid + "']") 語句查找錨點標籤
  var aTag = $("a[name='" + aid + "']");
  // aTag.offset().top 屬性來獲取標籤的實際位置，並將它作為 scrollTop 的值。
  $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}

$("#home").click(function () {
  scrollToAnchor('home');
});

$("#AboutHouse").click(function () {
  scrollToAnchor('AboutHouse');
});

$("#AboutOwner").click(function () {
  scrollToAnchor('AboutOwner');
});

$("#Photo").click(function () {
  scrollToAnchor('Photo');
});

$("#Information").click(function () {
  scrollToAnchor('Information');
});

$("#from").click(function () {
  scrollToAnchor('from');
});