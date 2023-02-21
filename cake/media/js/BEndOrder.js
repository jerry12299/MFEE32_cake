const Btn_detailopen = $("tr.list>td>button");
$("tr.detail").hide();

$(Btn_detailopen).on("click", function () {
    const ThisDetail = $(this).parent().parent().next();
    $(this).toggleClass("open");
    ThisDetail.toggle(function () {
        
    }, function () {

    });
})
