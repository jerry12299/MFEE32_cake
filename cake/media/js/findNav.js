/*用來判斷 在哪裡畫底線用*/
class findCurrent {
    findCurrentLink(nowtitle, alltitle) {
        const now = $(nowtitle); //當前文字
        const all = $(alltitle);  //很多的那個， S.init =>a a.taxt=>當前文字

        // console.log($(MyH1s).text());

        all.each(function (index, element) {
            // index 從 0 開始，element 為該 html element，而不是 jQuery 物件
            //console.log(index, element); console.log($(element).text());
            if ($(element).text() == now.text()) {
                $(element).css({
                    backgroundColor: "var(--Brown04_BE)",
                    color:"var(--YWhite)",
                    padding:"5px 6px 5px 10px",
                    margin: "0 0 10px 0",
                    borderRadius: "5px"
                });
            }
        });
    }
}

const findNav = new findCurrent();
findNav.findCurrentLink("#PMcakeOrder>div>h6", "p1");

/* hover 底線特效*/
class hoverCurrentNav {
    hoverCurrent(nowtitle, hovertitle) {
        const now = $(nowtitle);          //當前文字
        const thishover = $(hovertitle);  //很多的那個，S.init =>a a.taxt=>當前文字

        // console.log($(thishover).text());

        thishover.each(function (index, element) {
            /*如果是當前那個，就跳過*/
            if ($(element).text() == now.text()) {
                return;
            } else {
                /*要先去css加入addline*/
                $(element).after("<p class='addline'></p>");

                $(element).on("mouseenter",
                    function (a) {
                        //console.log("a.target的文字是", $(a.target)); //取得當前滑過區塊
                        const mytext = $(a.target).next();
                        //console.log("mytext是", mytext);
                        mytext.css({
                            transform: "scaleX(1)",
                        });
                    })
                $(element).on("mouseleave",
                    function (a) {
                        $(".addline").css({
                            transform: "scaleX(0)",
                        });
                    })
            }
        });
    }
}
const hoverNav = new hoverCurrentNav();
hoverNav.hoverCurrent("#PMcakeOrder>div>h6", "p1");