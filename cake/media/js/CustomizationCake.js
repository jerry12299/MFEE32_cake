/* 蛋糕無縫滾動效果 */
var speed = 50; // 每次滾動的像素數
var interval = 30; // 每次滾動之間的時間間隔（毫秒）

var container = $('.CZcake');// 取得元素和元素寬
$('#workShow>div:first-of-type').append(container.parent().html()).append(container.parent().html());// 複製清單

//開始滾動
var currentPosition = 0;
var timer;
var isPaused = false; // 是否暫停滾動

// 滾動動畫
function scroll() {
    if (!isPaused) {
        currentPosition -= speed / (1000 / interval);
        container.parent().css('transform', 'translateX(' + currentPosition + 'px)');
        if (currentPosition <= -(container.outerWidth())) {
            currentPosition = 0;
        }
    }
}

//開始滾動
var currentPosition = 0;
var timer = setInterval(scroll, interval);
// 滑鼠移到蛋糕時暫停滾動
$('.item_CZcake').on('mouseenter', function () {isPaused = true;});
// 滑鼠移開蛋糕時繼續滾動
$('.item_CZcake').on('mouseleave', function () {isPaused = false;});


/* 蛋糕hover效果 */
const CakePic = $("li.item_CZcake");
$(CakePic).hover(
    function (a) {  //a=event   a.target=img  this=<a>
        //console.log("$(a)是", a.currentTarget)
        if ($(a.target).is("img")) {
            $(this).append('<fork>&nbsp;</fork>', '<p>點我看詳細</p>', '<color></color>');
            // console.log("$(a.target)是",$(a.target).attr("alt"));
            const mypic = $(a.currentTarget)
            mypic.css({
                transform: "rotate(30deg)",
            })
        }
        stopBubble(a);
    },
    function (b) {
        // if ($(b.target).not("color")) {console.log("我是",b.target)}
        // console.log("$(b.target)是", b.target);
        $("li.item_CZcake>fork").remove();
        $("li.item_CZcake>p").remove();
        $("li.item_CZcake>color").remove();

        const mypic = $("li.item_CZcake");
        mypic.css({
            transform: "rotate(0deg)",
        })
    }
);


/* 蛋糕點擊出現浮窗 */
const showDialog = $("dialog.showCZcakeDetail");
CakePic.on("click", function () {
    isPaused = true;
    showDialog.css({ display: "flex", });

    const src_Real = $(this).find("img").prop("src");
    const src_Draw = src_Real.replace(".jpg", "") + "_draw.jpg";
    $(showDialog.children().children()[0]).prop("src", src_Real);
    $(showDialog.children().children()[1]).prop("src", src_Draw);
})

/* 任意點擊關閉浮窗 */
showDialog.on("click", function (a) {
    if ($(a.target).is("img") || $(a.target).is("div") || $(a.target).is("section") || $(a.target).is("price")|| $(a.target).is("h6")|| $(a.target).is("p")) {
        return;
    } else {
        showDialog.css({ display: "none", });
        isPaused = false;
    }
})

/* 阻止當前事件冒泡 */
function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();  //w3c
    } else {
        window.event.cancelBubble = true; //IE
    }
}

// /* 雲無縫滾動效果 */
// var speed_cioud = 50; // 每次滾動的像素數
// var interval = 30; // 每次滾動之間的時間間隔（毫秒）

// var container = $('.clouds');// 取得元素和元素寬
// $('#workShow>div:first-of-type').append(container.parent().html()).append(container.parent().html());// 複製清單

// //開始滾動
// var currentPosition = 0;
// var timer;
// var isPaused = false; // 是否暫停滾動

// // 滾動動畫
// function scroll() {
//     if (!isPaused) {
//         currentPosition -= speed / (1000 / interval);
//         container.parent().css('transform', 'translateX(' + currentPosition + 'px)');
//         if (currentPosition <= -(container.outerWidth())) {
//             currentPosition = 0;
//         }
//     }
// }

// //開始滾動
// var currentPosition = 0;
// var timer = setInterval(scroll, interval);