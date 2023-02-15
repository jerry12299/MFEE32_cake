// 蛋糕上下位移
// ul移動
var myCakeLi = $("li.item_CZcake"); 

for(i in myCakeLi.lenght){
    //基數
    if ( i%2 != 0 ){
        console.log(`我是${i}`)
        $("li.item_CZcake img").eq(i).css({ top : "50px" });
    }else{

    }
}