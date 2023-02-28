/* 蛋糕HOVER效果處理 */
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

/* 側邊欄位狀態 ---不過暫時沒想到要改什麼css樣式*/
const nowH1 = $(".PMCake_show_content>h6"); //當前h1文字
const MyH1s = $(".list td>a"); //S.init =>a a.taxt=>當前文字
//.get()把取得的內容變成陣列
console.log(MyH1s);
MyH1s.each(function (index, element) {
    // index 從 0 開始，element 為該 html element，而不是 jQuery 物件
    // console.log(index, element); console.log($(element).text());
    if ($(element).text() == nowH1.text()) {
        $(element).css({

        })
    }
})

