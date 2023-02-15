CakePic = $(".commodity_item>div:first-of-type>a");
$(CakePic).hover(
    function (a) {  //a=event   a.target=img  this=<a>
        $(this).append('<fork>&nbsp;</fork>', '<p>點我看詳細</p>', '<color></color>');

        const mypicDiv = $(a.target).parent().parent()
        mypicDiv.css({
            transform: "rotate(30deg)",
        })
    },
    function (b) {
        if ($(b.target).is("img")) {
            //console.log("我是圖片不刪除");
            return;
        }
        $(b.target).siblings("color").remove();
        $(b.target).siblings("fork").remove();
        $(b.target).siblings("p").remove();
        $(b.target).remove();
        const mypicDiv = $(".commodity_item>div")
        mypicDiv.css({
            transform: "rotate(0deg)",
        })
    }
);