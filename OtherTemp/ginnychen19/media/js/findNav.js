/*用來判斷 在哪裡畫底線用*/
class findCurrent {
    findCurrentLink(now, My) {
        const nowH1 = $(now); //當前文字
        const MyH1s = $(My); //S.init =>a a.taxt=>當前文字

        // console.log($(MyH1s).text());

        MyH1s.each(function (index, element) {
            // index 從 0 開始，element 為該 html element，而不是 jQuery 物件
            //console.log(index, element); console.log($(element).text());
            if ($(element).text() == nowH1.text()) {
                $(element).css({
                    backgroundColor:"red",
                });
            }
        });
    }
}

const findNav = new findCurrent();
findNav.findCurrentLink("#PMcakeOrder>div>h6","p1");