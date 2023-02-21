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
            console.log(list.clientLeft);
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

// 滾動切換div
// let div1 = document.getElementById('About_us');
//         let div2 = document.getElementById('About_food');
//         let div3 = document.getElementById('About_good');
//         let activeDiv = div1;

//         function scrollHandler(e) {
//             if (e.deltaY > 0) {
//                 activeDiv = activeDiv === div1 ? div2 : activeDiv === div2 ? div3 : div1;
//             } else {
//                 activeDiv = activeDiv === div1 ? div3 : activeDiv === div3 ? div2 : div1;
//             }
//             activeDiv.classList.add('ani');
//             [div1, div2, div3].forEach((div) => {
//                 if (div !== activeDiv) {
//                     div.classList.remove('ani');
//                 }
//             });
//         }

//         window.addEventListener('wheel', scrollHandler);