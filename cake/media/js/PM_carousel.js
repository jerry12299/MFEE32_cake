const BTN_prev = $("#prev");
const BTN_next = $("#next");
const figcaption = $(".cakePic>div>figcaption");
const pic_Width = parseInt($(".mainPic").css("width"), 10);//250
const pic_allWidth = $(".cakePic>div>figcaption")[0].clientWidth;
const pic_length = $(".smallPic").length;

BTN_prev.on("click", function () {
    if (figcaption.css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
        return;
    }
    let Pos = figcaption.css("transform");
    let regex = /-?\d+/g;  // 匹配整數的正則表達式
    let currentPos = parseInt((Pos.match(regex))[4]);
    let newPos = currentPos + pic_Width;
    figcaption.css("transform", `matrix(1, 0, 0, 1, ${newPos}, 0)`);
});
BTN_next.on("click", function () {
    if (figcaption.css("transform") == `matrix(1, 0, 0, 1, -${pic_allWidth - pic_Width}, 0)`) {
        return;
    }
    let Pos = figcaption.css("transform");
    let regex = /-?\d+/g;
    let currentPos = parseInt((Pos.match(regex))[4]);
    let newPos = currentPos - pic_Width;
    figcaption.css("transform", `matrix(1, 0, 0, 1, ${newPos}, 0)`);
});
$(".smallPic").on("click", function () {
    let Pos = parseInt($(this).attr("id"));
    figcaption.css("transform", `matrix(1, 0, 0, 1, -${pic_Width * Pos}, 0)`);
    //0 -250 -500 -750
});


figcaption.hover(function(){
    $(".cakePic>div>p").css("opacity","100%");
},function(){
    $(".cakePic>div>p").css("opacity","0%");
});


/* 詳細蛋糕頁，點擊出現浮窗 */
const showPicDialog = $("dialog.ShowBigPic");

figcaption.on("click", function () {
    showPicDialog.css({ display: "flex", });
    let Pos = figcaption.css("transform");
    let regex = /-?\d+/g;
    let currentid = "#0"+ Math.abs(parseInt((Pos.match(regex))[4])/pic_Width);
    const thisURL = $(currentid).attr("src");
    showPicDialog.find("img").attr("src",thisURL);
});

showPicDialog.on("click", function (a) {
    console.log(a.target);
    if ($(a.target).is("div") || $(a.target).is("img")) {
        return;
    } else {
        showPicDialog.css({ display: "none", });
    }
})