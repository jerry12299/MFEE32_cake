/* 詳細蛋糕頁，點擊出現浮窗 */
const BTN = $('#buy');
const showDialog = $("dialog");
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
