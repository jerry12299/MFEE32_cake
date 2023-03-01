const Btn_detailopen = $("tr.list>td>button");
$("tr.detail").hide();

$(Btn_detailopen).on("click", function () {
    const ThisDetail = $(this).parent().parent().next();
    $(this).toggleClass("open");
    ThisDetail.toggle(function () {
        
    }, function () {

    });
})

/* 狀態換色 */
const state = $('.Order>tbody>tr.list>td:nth-of-type(7)');
const cust_pay_state = $('.Order>tbody>tr.list>td:nth-of-type(8)');
const cust_shipping = $('.Order>tbody>tr.list>td:nth-of-type(9)');
state.each(function (index ,elem){
    // console.log($(this).text());
    if($(this).text().trim() == "申請取消" || $(this).text().trim() == "已取消"){
        $(this).css({backgroundColor: "var(--BTN_Red)"})
    }
    if($(this).text().trim() == "未製作" || $(this).text().trim() == "未聯絡"){
        $(this).css({backgroundColor: "var(--BTN_Yellow)"})
    }
    if($(this).text().trim() == "已製作"){
        $(this).css({backgroundColor: "var(--BTN_Green)"})
    }
    if($(this).text().trim() == "洽談中"){
        $(this).css({backgroundColor: "var(--BTN_Blue)"})
    }

})
cust_pay_state.each(function (index ,elem){
    // console.log($(this).text());
    if($(this).text().trim() == "已退款"){
        $(this).css({backgroundColor: "var(--BTN_Red)"})
    }
    if($(this).text().trim() == "未付款"){
        $(this).css({backgroundColor: "var(--BTN_Yellow)"})
    }
    if($(this).text().trim() == "已付款"){
        $(this).css({backgroundColor: "var(--BTN_Green)"})
    }
})
cust_shipping.each(function (index ,elem){
    // console.log($(this).text());
    if($(this).text().trim() == "已取消"){
        $(this).css({backgroundColor: "var(--BTN_Red)"})
    }
    if($(this).text().trim() == "未配送" || $(this).text().trim() == "未取貨"){
        $(this).css({backgroundColor: "var(--BTN_Yellow)"})
    }
    if($(this).text().trim() == "已配送" || $(this).text().trim() == "已取貨"){
        $(this).css({backgroundColor: "var(--BTN_Green)"})
    }
})

/* 時間排序 */
console.log();
const co_upload_date= $('.Order>thead>tr>td:nth-of-type(5)');
const pick_up_date = $('.Order>thead>tr>td:nth-of-type(6)');

co_upload_date.on("click",function(){
    if(co_upload_date.text() == "成立時間 ▲"){
        co_upload_date.text("成立時間 ▼");
    }else{
        co_upload_date.text("成立時間 ▲");
    }
})

pick_up_date.on("click",function(){
    if(pick_up_date.text() == "預約時間 ▲"){
        pick_up_date.text("預約時間 ▼");
    }else{
        pick_up_date.text("預約時間 ▲");
    }
})