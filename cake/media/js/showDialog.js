/* 詳細蛋糕頁，點擊出現浮窗 */
const BTN = $('#buy');
const showDialog = $("dialog.orderSuccess");
BTN.on("click", function () {
    isPaused = true;
    showDialog.css({ display: "flex", });
})

/* 任意點擊關閉浮窗 */
showDialog.on("click", function (a) {
    console.log(a.target);
    if ($(a.target).is("div") || $(a.target).is("img") || $(a.target).is("img+h6")) {
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

/* 後臺頁，註銷成功出現浮窗 */
const BTN_cancel = $('.btn_red');
const showDialog_BEnd = $('.ShowMSG')
BTN_cancel.on("click", function () {
    let img = showDialog_BEnd.children().children().eq(1).find("img");
    let h6 = showDialog_BEnd.children().children().eq(1).find("h6");

    showDialog_BEnd.css({ display: "flex", });
    showDialog_BEnd.children().css({ border: "10px solid var(--BTN_Red)", backgroundColor: "var(--YWhite)" });
    showDialog_BEnd.children().children().eq(0).css({ backgroundColor: "var(--BTN_Red)", color: "var(--YWhite)" });
    showDialog_BEnd.children().children().eq(0).find("h6").css({ color: "var(--YWhite)" });
    h6.css({ color: "var(--BTN_Red)" })

    img.attr("src", "../Source/IMG/Key-Vision/Rabbit_NO.png");
    h6.text("註銷成功")
})

/* 任意點擊關閉浮窗 */
showDialog_BEnd.on("click", function (a) {
    if ($(a.target).is("div") || $(a.target).is("img") || $(a.target).is("img+h6")) {
        return;
    } else {
        location.href = '/commodity';
    }
})
