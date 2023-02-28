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
