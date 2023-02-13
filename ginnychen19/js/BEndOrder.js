function openDetail(element) {
    console.log(element)
    const detail = $('tr.detail');
    $(element).toggle(
        function () {
            detail.show();
        },
        function () {

            detail.hide();
        });
    // 其他程式碼
}