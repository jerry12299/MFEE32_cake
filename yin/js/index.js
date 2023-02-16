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