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

// const changeColor = (entries, observer) =>{
//   entries.forEach(entry=>{
//     if(!entry.isIntersecting){
//       nav.classList.add('scrolled');
//     }else{
//        nav.classList.remove('scrolled');
//     }
//   })
  
// }

// let observer = new IntersectionObserver(changeColor);
// observer.observe(section);

// 回到頂端
$(document).ready(function () {
  // 捲軸偵測距離頂部超過 100 才顯示按鈕
  $(window).scroll(function () {
      if ($(window).scrollTop() > 200) {
          if ($(".goTop").hasClass("hide")) {
              $(".goTop").toggleClass("hide");
          }
      } else {
          $(".goTop").addClass("hide");
      }
  });

  // 點擊按鈕回頂部
  $(".goTop").on("click", function (event) {
      $("html, body").animate(
          {
              scrollTop: 0
          },
          300 // 回頂部時間為 500 毫秒
      );
  });
});


// 主視覺視差
let layers = document.querySelectorAll('.keyart-layer');
        let speed, ypos;
        //視窗捲動事件
        window.addEventListener("scroll",function (event) {
        //文件垂直捲動的像素值
        let fromTop = this.pageYOffset;
        //偏移各圖層位置
        for(let layer of layers){
        speed = layer.getAttribute('speed');
        //偏移捲動量*速度,再乘上個基數
        yPos = -(fromTop * speed) * 0.01;
        layer.style.transform=`translateY(${yPos}px)` ;
        }
        });



// 文字跑馬燈
const list = document.querySelector('.list_T');
        const totalWidth = list.offsetWidth;
        console.log(totalWidth);

        function loadT() {
            var lista = document.querySelector('.list_T')
            // 複製一份清單
            lista.innerHTML += lista.innerHTML;
            let left = lista.style.left;
            let timer;
            function move() {
                clearInterval(timer);
                timer = setInterval((e) => {
                    left = left - 2;
                    if (left == - (4930)) {
                        left = 0;
                    }
                    lista.style.left = left + 'px';
                }, 30);
            }
            move();
        };
        document.addEventListener('DOMContentLoaded', loadT);


// 照片跑馬燈
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