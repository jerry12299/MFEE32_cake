// 跑馬燈
function load(){    
    var list = document.querySelector('.list')
    var box = document.querySelector('.box');
    // 複製一份清單
    list.innerHTML+=list.innerHTML;
    let left = list.style.left;
    let timer;
    function move(){
        clearInterval(timer);
        timer=setInterval((env) => {
            left = left - 2;
            // console.log(list.clientLeft);
            // 六張圖*寬度+magin
            // 還要加上6個margin
            if(left ==- (6 * 300 + 6 * 10)){ 
                left = 0;
            }
            list.style.left = left + 'px';
        },30);
    }
         move();
        box.onmouseover = function(){
              clearInterval(timer);
        };

        box.onmouseleave = function(){
             move();
        };
};
document.addEventListener('DOMContentLoaded',load);

// News兩個輪播
$(document).ready(function(){
    $('.responsive').slick({
dots: true,
infinite: false,
speed: 300,
slidesToShow: 2,
slidesToScroll: 2,
responsive: [
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1
  }
}
]
});
});

// about區塊
 

// -------------視差---------------------
const parallax = document.querySelector('#parallax_img');
let scrollPos = 0;
const maxScrollPos = 200;
const minScrollPos = -200;

window.addEventListener('wheel', function(e) {
  if (e.deltaY > 0) {
    // 滾動向下
    scrollPos -= 30;
  } else {
    // 滾動向上
    scrollPos += 30;
  }
  
  // 檢查 scrollPos 是否超出範圍
  if (scrollPos > maxScrollPos) {
    scrollPos = maxScrollPos;
  } else if (scrollPos < minScrollPos) {
    scrollPos = minScrollPos;
  }
  
  parallax.style.transform = `translateY(${scrollPos}px)`;
});