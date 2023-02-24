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
const showDialog = $("dialog");
CakePic.on("click", function () {
    showDialog.css({ display: "flex", });

    const src_Real = $(this).find("img").prop("src");
    const src_Draw = src_Real.replace(".jpg", "") + "_draw.jpg";
    $(showDialog.children()[0]).prop("src", src_Real);
    $(showDialog.children()[1]).prop("src", src_Draw);
})

/* 任意點擊關閉浮窗 */
const showDialogChild = showDialog.children();

showDialog.on("click", function (a) {
    if($(a.target).is(showDialogChild)){
        return;
    }else{
        showDialog.css({ display: "none", });
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
