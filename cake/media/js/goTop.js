// 點擊按鈕回頂部
$(".goTop").on("click", function (event) {
    $("html, body").animate(
        { scrollTop: 0 }, 300 // 回頂部時間為 500 毫秒
    );
});
