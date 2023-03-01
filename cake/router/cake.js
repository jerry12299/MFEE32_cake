var express = require("express");
var multer = require('multer'); //上傳檔案
var index = express.Router(); //路由
var db = require('../db.js');//讀取資料庫
var pwd = require('../media/js/shal.js') // 加密


// var shalpassword = pwd.hex_sha1('1234');
// pwd.b64_sha1()
// console.log("hex_sha1:"+shalpassword);

function rights_api(req, res, next) { //判斷是否為管理者
    if (req.session.user.rights) {
        next();  //有登入繼續執行function
    } else {
        res.end('permission deined');
    }
}
function login_api(req, res, next) { //判斷是否登入
    if (req.session.user) {
        next();  //有登入繼續執行function
    } else {
        res.end('permission deined');
    }
}

index.get('/', function (req, res) {
    // res.redirect('/') //.redirect 重新導向 

    res.render('index.ejs')
})


index.get('/C01/:class', function (req, res) { //主題蛋糕頁
    var c_class = req.params.class
    switch (parseInt(c_class)) {
        case 0:
            var class_name = '2023季節主打'
            break;
        case 1:
            var class_name = '彌月蛋糕系列'
            break;
        case 2:
            var class_name = '重乳酪'
            break;
        case 3:
            var class_name = '生乳酪'
            break;
        case 4:
            var class_name = '配件區'
            break;
    
        default:
            break;
    }
    // console.log(class_name)
    db.exec(`SELECT * FROM commodity WHERE c_class = ?`,[c_class],function(data,fields){
        res.render('C01.ejs',{
            data:data,
            c_class:class_name
        })
    })
    
})

// index.get('/C01_2', function (req, res) { //主題蛋糕頁
//     res.render('C01_2.ejs')
// })
index.get('/C02', function (req, res) { //客制蛋糕頁
    if(!req.session.user){
     res.render('C02.ejs')
    }else{
        db.exec(`SELECT * FROM member WHERE m_id = ?`,[req.session.user.m_id],function(data,fields){
            console.log(data)
            res.render('C02.ejs',{
                data:data[0]
            })
        })  
        
    }
    
    
})
index.get('/C03', function (req, res) { //餡料介紹
    res.render('C03.ejs')
})
index.get('/C04', function (req, res) { //常見問題
    res.render('C04.ejs')
})
index.get('/C05', function (req, res) { //登入頁
    res.render('C05.ejs')
})
//-----------登入
index.post('/C05', function (req, res) {
    var sql = `SELECT m_id,rights FROM member WHERE email=? and pwd=?;` //查詢使用者帳密
    var password = pwd.b64_sha1(req.body.password)
    // console.log(password)
    var data = [req.body.account, password] //2個?
    db.exec(sql, data, function (results, fields) {
        console.log(results[0])
        if (results[0]) { //結果成立
            req.session.user = {    //紀錄session.user

                m_id: results[0].m_id,
                rights: results[0].rights,

            }
            // console.log(results[0].rights);
            var rights = String(results[0].rights) 
            res.end(rights)
        } else {
            res.end('login failed')
        }
    })
})



index.get('/C06', function (req, res) { //購物車
    if (!req.session.user) {
        res.render('C06.ejs', {
            data: {}
        })
    } else {
        var sql = `SELECT m_name,email,phone,address FROM member WHERE m_id = ?`
        db.exec(sql, [req.session.user.m_id], function (data, fields) {
            // console.log(data[0])
            res.render('C06.ejs', {
                data: data[0]
            })
        })
    }



})





//--------------------- 主題蛋糕
//([0-9]+) 0-9 不限數量
index.get('/C05_2/:page([0-9]+)', rights_api, function (req, res) {
    var page = req.params.page   //page=網址列的page數字
    if(page == 0){
        page += 1 ;
    }
    var nums_per_page = 10
    var offset = (page - 1) * nums_per_page
    var sql = `SELECT buy_order.o_id,co_upload_date,pick_up_date,payment,pay_state,pickup_method,co_state,remark,shipping,rec_address,email,m_name,phone,order_total FROM buy_order , member, 
    (
    SELECT o_id, sum(total)as order_total FROM 
    (
    SELECT buy_order.o_id,c_name,price,quantity,price*quantity as total FROM buy_order , cake_order, commodity WHERE buy_order.o_id = cake_order.o_id and cake_order.c_id = commodity.c_id
    )as a 
    GROUP BY o_id
    )as b
    WHERE buy_order.m_id = member.m_id and buy_order.o_id = b.o_id LIMIT ${offset}, ${nums_per_page};`  //sql指令 顯示10筆1頁
    // 使用db.js裡的exec函式，也就是apple函式                                // 給函式3個參數
    // db.exec(`SELECT * FROM cake_order LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
    db.exec(sql,
        [],                                                                   //有?時填的資料，沒有就給空[]
        function (data, fields) {             //function()的{}頭                                
            // console.log('mask_js_data:',data);  //資料庫傳來的內容 10筆1頁

            db.exec(`SELECT COUNT(*) AS COUNT FROM buy_order`, //sql指令 資料總和
                [],
                function (nums, fields) {

                    db.exec(`SELECT buy_order.o_id,c_name,price,quantity,price*quantity as total FROM buy_order , cake_order, commodity WHERE buy_order.o_id = cake_order.o_id and cake_order.c_id = commodity.c_id`, [], function (orderData, fields) {

                        // console.log('mask_js_nums:',nums); // [COUNT:28]
                        // console.log('mask_js_nums[0].COUNT:',nums[0].COUNT); // 28
                        var last_page = Math.ceil(nums[0].COUNT / nums_per_page) // 無條件進位  28/10 = 3

                        if (page > last_page) { //如果大於最大頁數
                            res.redirect('/C05_2/' + last_page) //跳轉到最後一頁
                            return
                        }else if(page <= 0){
                            res.redirect('/C05_2/1') //跳轉到第一頁
                            return
                        }

                        res.render('C05_2.ejs', { //跳轉到index.ejs
                            data: data,
                            order_D: orderData,                   //data:資料庫傳來的內容 10筆1頁
                            curr_page: page,              //curr_page:網址列的page數字
                            total_nums: nums[0].COUNT,    //total_nums: 28
                            last_page: last_page          //last_page: 3
                        })



                    })

                })     //第二個db.exec的()尾 
        })        //function()的{}尾  第一個db.exec的()尾 
})
//-------------------------客製化頁面
index.get('/C05_3/:page([0-9]+)', rights_api, function (req, res) {
    var page = req.params.page   //page=網址列的page數字
    if(page == 0){
        page += 1 ;
    }
    var nums_per_page = 10
    var offset = (page - 1) * nums_per_page
    // 使用db.js裡的exec函式，也就是apple函式                                // 給函式3個參數
    db.exec(`SELECT cust_id,customized.m_id,m_name,cust_upload_date,cust_form,cust_state,picture,connection,cust_pay,cust_pick,cust_date,cust_price,cust_shipping,cust_pay_state,email,phone,address FROM customized,member WHERE customized.m_id = member.m_id LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
        [],                                                                   //有?時填的資料，沒有就給空[]
        function (data, fields) {             //function()的{}頭                                
            // console.log('mask_js_data:',data);  //資料庫傳來的內容 10筆1頁

            db.exec(`SELECT COUNT(*) AS COUNT FROM customized`, //sql指令 資料總和
                [],
                function (nums, fields) {
                    // console.log('mask_js_nums:',nums); // [COUNT:28]
                    // console.log('mask_js_nums[0].COUNT:',nums[0].COUNT); // 28
                    var last_page = Math.ceil(nums[0].COUNT / nums_per_page) // 無條件進位  28/10 = 3

                    if (page > last_page) { //如果大於最大頁數
                        res.redirect('/C05_3/' + last_page) //跳轉到最後一頁
                        return
                    }else if(page <= 0){
                        res.redirect('/C05_3/1') //跳轉到第一頁
                        return
                    }

                    res.render('C05_3.ejs', { //跳轉到index.ejs
                        data: data,                   //data:資料庫傳來的內容 10筆1頁
                        curr_page: page,              //curr_page:網址列的page數字
                        total_nums: nums[0].COUNT,    //total_nums: 28
                        last_page: last_page          //last_page: 3
                    })
                })     //第二個db.exec的()尾 
        })        //function()的{}尾  第一個db.exec的()尾 
})

//--------------客製 更新

index.post('/custUpdate',rights_api, function (req, res){
    var data = req.body
    // console.log(data)
    var sql = `UPDATE customized SET cust_pay = ?,cust_pick = ?,cust_date = ?,cust_state = ?, cust_price = ?,cust_shipping = ?,cust_pay_state = ? WHERE customized.cust_id = ?`
    var item = [data.cust_pay,data.cust_pick,data.cust_date,data.cust_state,data.cust_price,data.cust_shipping,data.cust_pay_state,data.cust_id]
    db.exec(sql,item,function(results, fields){
        if (results.affectedRows) {
            res.end('update success')
        } else {
            res.end('update failed')
        }
    })
})

//----------------------




//-----------------------註冊
index.get('/C05_1', function (req, res) {
    res.render('C05_1.ejs') //跳轉註冊頁
})


// //從C05_1.ejs傳回來
index.post('/C05_1', function (req, res) {
    var body = req.body      //回傳的 post 資料
    // console.log('body-t:', body);
    var newPwd = pwd.b64_sha1(body.password) 

    var emailCheck = `SELECT email FROM member WHERE email = ?;` //查詢是否有資料
    var eData = [body.email]

    db.exec(emailCheck, eData, function (results, fields) {  //檢查是否註冊
        //results.insertId 新id
        if (results[0]) {                                   //有東西代表已註冊
            res.end('e-mail repeat');
            // res.render('/')
        } else {
            var sql = `INSERT INTO member (email, pwd, m_name, birthday, gender, phone, address) VALUES (?,?,?,?,?,?,?);`
            // post資料做成陣列 傳來的必為字串
            //parseInt 轉數字
            var data = [body.email, newPwd, body.name, body.birthday, body.gender, body.phone, body.address];

            db.exec(sql, data, function (results, fields) {
                //results.insertId 新id
                // console.log("results:", results)

                if (results.insertId) {
                    res.end('insert success: ' + results.insertId);
                    // res.render('/')
                } else {
                    res.end('insert failed');
                }
            })


        }
    })
})

//-----------驗證
index.post('/email', function (req, res) {
    var email = req.body.email;

    var sql = `SELECT email FROM member WHERE email = ?;`
    db.exec(sql, [email], function (results, fields) {
        //    console.log(results[0]) 
        if (results[0]) {
            res.end('0');
        } else {
            res.end('1');
        }


    })
})



//---------------上傳檔案

var userImg = multer.diskStorage({
    destination: function (req, file, cb) {  //固定，不能改
        cb(null, "./media/upload");  //儲存路徑
    },
    filename: function (req, file, cb) { //固定，不能改
        // console.log(file.originalname.split(".").pop());//附檔名
        var d = new Date();
        var today = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getTime();
        cb(null, today + '.' + file.originalname.split(".").pop());  // 自定義檔案名稱
        // cb(null, today);  // 自定義檔案名稱
    }
});
var user = multer({
    storage: userImg

});


// index.get('/C02', function (req, res) {
//     res.render('C02.ejs') //跳轉到客制化.ejs
// })

index.post('/C02', login_api, user.single('img'), function (req, res) {
    var data = JSON.parse(req.body.data)       //回傳的 post 資料
  
         if(data.cakeTaste1){
        var Taste1 = data.cakeTaste1+','
    }else{
        var Taste1 = ''
    }
  
         if(data.cakeTaste2){
        var Taste2 = data.cakeTaste2+','
    }else{
        var Taste2 = ''
    }
  
         if(data.cakeTaste3){
        var Taste3 = data.cakeTaste3+','
    }else{
        var Taste3 = ''
    }
  
         if(data.cakeTaste4){
        var Taste4 = data.cakeTaste4+','
    }else{
        var Taste4 = ''
    }
         if(parseInt(data.acc1)){
        var acc1 = '生日快樂英文插旗*'+data.acc1+','
    }else{
        var acc1 = ''
    }
         if(parseInt(data.acc2)){
        var acc2 = '氣球($150)*'+ data.acc2+','
    }else{
        var acc2 = ''
    }
         if(parseInt(data.acc3)){
        var acc3 = '生日小皇冠($150)*'+data.acc3+','
    }else{
        var acc3 = ''
    }
         if(parseInt(data.acc4)){
        var acc4 = '壽字插旗($50)*'+data.acc4+','
    }else{
        var acc4 = ''
    }
         if(parseInt(data.acc5)){
        var acc5 = '生日派對掛旗($250)*'+data.acc5+','
    }else{
        var acc5 = ''
    }
  
   
    var form = `尺寸:${data.cakeSize},口味:${Taste1}${Taste2}${Taste3}${Taste4}顏色:${data.cakeColor},配件:${acc1}${acc2}${acc3}${acc4}${acc5}備註:${data.note}`
    // console.log(req.file.filename); //檔名
    // console.log(data); 
    console.log(form)

    // var sql = `INSERT INTO customized(m_id,cust_form,cust_state,picture) VALUES(?,?,?,?);`
    var sql = `INSERT INTO customized (m_id, cust_form, cust_state, picture, connection, cust_pay, cust_pick, cust_date, cust_price, cust_shipping, cust_pay_state) VALUES (?, ?, '未製作', ?, ?, '未定', '未定', ?, '0', '未配送', '未付款');`
    // post資料做成陣列 傳來的必為字串
    // parseInt 轉數字
    var item = [data.m_id, form, req.file.filename,data.connection,data.cust_date]
    db.exec(sql, item, function (results, fields) {
        //results.insertId 新id
        if (results.insertId) {
            res.end('insert success: ' + results.insertId);
        } else {
            res.end('insert failed');
        }
    })

})

//-----------------------------會員介面

//---------------主題蛋糕訂單頁
index.get('/C05_4/:page([0-9]+)', login_api, function (req, res) {
    var page = req.params.page   //page=網址列的page數字
    var nums_per_page = 10
    var offset = (page - 1) * nums_per_page
    // 使用db.js裡的exec函式，也就是apple函式                                // 給函式3個參數
    // db.exec(`SELECT * FROM cake_order LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
    db.exec(`SELECT buy_order.o_id,co_upload_date,pick_up_date,payment,pay_state,pickup_method,co_state,remark,shipping,rec_address,email,m_name,phone,order_total FROM buy_order , member, 
    (
    SELECT o_id, sum(total)as order_total FROM 
    (
    SELECT buy_order.o_id,c_name,price,quantity,price*quantity as total FROM buy_order , cake_order, commodity WHERE buy_order.o_id = cake_order.o_id and cake_order.c_id = commodity.c_id
    )as a 
    GROUP BY o_id
    )as b
    WHERE buy_order.m_id = member.m_id and buy_order.o_id = b.o_id and member.m_id = ? LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
        [req.session.user.m_id],                                                                   //有?時填的資料，沒有就給空[]
        function (data, fields) {             //function()的{}頭                                
            // console.log('mask_js_data:',data);  //資料庫傳來的內容 10筆1頁

            db.exec(`SELECT COUNT(*) AS COUNT FROM cake_order`, //sql指令 資料總和
                [],
                function (nums, fields) {
                    db.exec(`SELECT buy_order.o_id,c_name,price,quantity,price*quantity as total FROM buy_order , cake_order, commodity WHERE buy_order.o_id = cake_order.o_id and cake_order.c_id = commodity.c_id and m_id = ?`, [req.session.user.m_id], function (orderData, fields) {

                        // console.log('mask_js_nums:',nums); // [COUNT:28]
                        // console.log('mask_js_nums[0].COUNT:',nums[0].COUNT); // 28
                        var last_page = Math.ceil(nums[0].COUNT / nums_per_page) // 無條件進位  28/10 = 3

                        if (page > last_page) { //如果大於最大頁數
                            res.redirect('/C05_4/' + last_page) //跳轉到最後一頁
                            return
                        }

                        res.render('C05_4.ejs', { //跳轉到主題蛋糕訂單頁ejs
                            data: data,                   //data:資料庫傳來的內容 10筆1頁
                            order_D: orderData,
                            curr_page: page,              //curr_page:網址列的page數字
                            total_nums: nums[0].COUNT,    //total_nums: 28
                            last_page: last_page          //last_page: 3
                        })

                    })
                })     //第二個db.exec的()尾 
        })        //function()的{}尾  第一個db.exec的()尾 
})

//-------------登出

index.get('/logout', function (req, res) {
    req.session.destroy() // 刪光session 
    res.redirect('/')

})
//---------------會員資料修改
index.get('/C05_4_1', login_api, function (req, res) {
    var sql = `SELECT * FROM member WHERE m_id = ?`;
    var data = [req.session.user.m_id];
    db.exec(sql, data, function (data, fields) {
        // console.log(data[0]); //資料是[{}]形式
        res.render('C05_4_1.ejs', {
            data: data[0]
        })
    })

})
//更新資料
index.post('/C05_4_1', login_api, function (req, res) {
    var sql = `UPDATE member SET pwd =?,m_name	= ?,birthday= ? ,gender= ?, phone = ?, address = ? WHERE member.m_id = ?;`;
    var newPwd = pwd.b64_sha1(req.body.pwd) 
    var data = [newPwd,
    req.body.m_name,
    req.body.birthday,
    req.body.gender,
    req.body.phone,
    req.body.address,
    req.session.user.m_id];
    // console.log(data);
    db.exec(sql, data, function (result, fields) {
        if (result.affectedRows) {
            res.end('update success')
        } else {
            res.end('update failed')
        }
    })
})
//----------------------客製蛋糕頁面

index.get('/C05_4_2/:page([0-9]+)', login_api, function (req, res) {
    var page = req.params.page   //page=網址列的page數字
    var nums_per_page = 10
    var offset = (page - 1) * nums_per_page
    // 使用db.js裡的exec函式，也就是apple函式                                // 給函式3個參數
    // db.exec(`SELECT * FROM cake_order LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
    db.exec(`SELECT * FROM customized WHERE m_id = ? LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
        [req.session.user.m_id],                                                                   //有?時填的資料，沒有就給空[]
        function (data, fields) {             //function()的{}頭                                
            // console.log('mask_js_data:',data);  //資料庫傳來的內容 10筆1頁

            db.exec(`SELECT COUNT(*) AS COUNT FROM cake_order`, //sql指令 資料總和
                [],
                function (nums, fields) {
                    // console.log('mask_js_nums:',nums); // [COUNT:28]
                    // console.log('mask_js_nums[0].COUNT:',nums[0].COUNT); // 28
                    var last_page = Math.ceil(nums[0].COUNT / nums_per_page) // 無條件進位  28/10 = 3

                    if (page > last_page) { //如果大於最大頁數
                        res.redirect('/C05_4_2/' + last_page) //跳轉到最後一頁
                        return
                    }

                    res.render('C05_4_2.ejs', { //跳轉到客製蛋糕訂單頁ejs
                        data: data,                   //data:資料庫傳來的內容 10筆1頁
                        curr_page: page,              //curr_page:網址列的page數字
                        total_nums: nums[0].COUNT,    //total_nums: 28
                        last_page: last_page          //last_page: 3
                    })
                })     //第二個db.exec的()尾 
        })        //function()的{}尾  第一個db.exec的()尾 
})

//---------------------------顯示圖片
index.get('/picture/:pname', login_api, function (req, res) {
    // console.log(req.params.pname)
    var url = '/upload/' + req.params.pname

    res.render('picture.ejs', {
        pUrl: url
    })

})
//---------------------------顯示商品
index.get('/C01_2/:cname', function (req, res) {
    // console.log(req.params.cname)
    db.exec(`SELECT * FROM commodity WHERE commodity.c_id = ?;`,[req.params.cname],function(data,fields){
            
            res.render('C01_2.ejs', {
                data:data[0],
               
        
            })
   
    })

    

   

})

//-----------------加入購物車
// console.log(req.session.buy);
index.post('/buy', function (req, res) {
    var data = req.body;
    var sql = `SELECT * FROM commodity WHERE c_id = ?`
    // console.log(data)
    db.exec(sql, [data.name], function (result, fields) {
        // console.log(result[0]) 
        res.end(JSON.stringify(result[0]))
    })





})
function one (req, res, next){
    var newData = req.body
     if (newData.method === "自取") {

        var pick_up_date = `${newData.pickupDate} ${newData.pickupTime}`
        // console.log('1',pick_up_date)
    } else {
        var pick_up_date = `${newData.pickupDate2} ${newData.pickupTime2}`
        // console.log('2',pick_up_date)
    }
    var data = [newData.m_id, pick_up_date, newData.payment, newData.method, newData.remark, newData.rec_address]
    // console.log('buy:', data)
    //先送出訂購者資料，取得訂購編號
    var sql = `INSERT INTO buy_order (m_id, pick_up_date, payment, pay_state, pickup_method, co_state, remark, shipping,rec_address) VALUES (?, ?, ?, '未付款', ?, '未製作', ?, '未配送',?)`;
    db.exec(sql, data, function (result, fields) {
        // console.log(result.insertId) //訂購編號 o_id
        var o_id = result.insertId
        // console.log('o_id',o_id)
        res.locals.id = o_id;
        // res.locals.item =  newData.item;
      
        next()
       })
    
       
    
}
function two(req, res, next){
    var newData = req.body
    var o_id = res.locals.id
    var sql =``
    var data = []
    newData.item.forEach((x) => {
    
        sql += `INSERT INTO cake_order (o_id, c_id, quantity) VALUES ( ?, ?, ?);`
        data.push(o_id, x.name, x.quantity)

    })

    db.exec(sql, data, function (result, fields) {
        // console.log(result2.insertId)
         next()
    })
   
}





function three (req, res, next){
    var o_id = res.locals.id
    // console.log('res.locals.id',o_id)
    db.exec(`SELECT buy_order.o_id,co_upload_date,pick_up_date,payment,pickup_method,remark,email,phone,order_total FROM buy_order , member, 
    (
    SELECT o_id, sum(total)as order_total FROM 
    (
    SELECT buy_order.o_id,c_name,price,quantity,price*quantity as total FROM buy_order , cake_order, commodity WHERE buy_order.o_id = cake_order.o_id and cake_order.c_id = commodity.c_id
    )as a 
    GROUP BY o_id
    )as b
    WHERE buy_order.m_id = member.m_id and buy_order.o_id = b.o_id and buy_order.o_id = ?;`,
    [o_id],
     function (resData, fields) {
        // console.log('Data1:',resData)
        res.locals.resData = resData
        next()

     })




}

function four (req, res, next){
    var o_id = res.locals.id
    var resData = res.locals.resData
    db.exec(`SELECT c_name,price,img_name,quantity,price*quantity as total 
    FROM buy_order,cake_order,commodity 
    WHERE buy_order.o_id = cake_order.o_id AND cake_order.c_id = commodity.c_id AND buy_order.o_id = ?`,
    [o_id],
    function (resItem, fields) {
       
        // console.log('data2', resData)
        // console.log('item', resItem)
        res.end(JSON.stringify(
            {
            resData:resData,
            resItem:resItem
        }
        )
        )
        // res.end()
      
      
    })
}



//-------------------送出購買
index.post('/buyitem',[one,two,three,four]);


//----------------顯示最新訂單

//----------------修改狀態
index.post('/change', function (req, res) {
    var data = req.body;


    //要改的欄位                              
    db.exec(`UPDATE buy_order SET ${data.dbName} = ? WHERE buy_order.o_id = ?`,
        [data.value, data.o_id],  //要改的內容  //要改的o_id  
        function (result, fields) {
            res.end();

        })
})
//-----------------更新商品
index.get('/commodity',rights_api, function (req, res) { 
    db.exec(`SELECT * FROM commodity`, [], function (data, fields) {
        // console.log(data)

        res.render('commodity.ejs', {
            data: data
        })
    })

})

index.post('/commodity',rights_api, function (req, res) { 
    var data = req.body
    var item = [data.c_id,data.c_name,data.price,data.illustrate,data.img_name,data.c_class,data.img1,data.img2,data.img3,data.img4,data.img5,data.oldId];
    var sql = `UPDATE commodity SET c_id = ?, c_name = ?, price = ?, illustrate = ?, img_name = ?,c_class = ?,img1 = ?, img2 = ?, img3 = ?, img4 = ?, img5 = ? WHERE commodity.c_id = ?`
    // console.log(data)
    db.exec(sql,item,function(result, fields){
        if (result.affectedRows) {
            res.end('update success')
        } else {
            res.end('update failed')
        }

    })
})

var cakeImg = multer.diskStorage({
    destination: function (req, file, cb) {  //固定，不能改
        cb(null, "./media/Source/IMG");  //儲存路徑
    },
    filename: function (req, file, cb) { //固定，不能改
        // console.log(file.originalname.split(".").pop());//附檔名
        var d = new Date();
        var today = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getTime();
        cb(null, today + '.' + file.originalname.split(".").pop());  // 自定義檔案名稱
        // cb(null, today);  // 自定義檔案名稱
    }
});
var cake = multer({
    storage: cakeImg

});


index.post('/upimg',rights_api,cake.single('img'),function(req, res){
            res.end(req.file.filename)
})




//--------------------------新增商品

index.get('/additem',rights_api,function(req, res){
    res.render('additem.ejs')

})

index.post('/additem', rights_api, function (req, res) {
    var data = req.body;
    console.log(data)
    var sql = `INSERT INTO commodity (c_id, c_name, price,illustrate,img_name,c_class,img1 , img2 , img3 , img4, img5) VALUES (?, ?, ?,?,?,?, ?, ?,?,?,?)`
    db.exec(sql, [data.c_id, data.c_name, data.price,data.illustrate,data.img_name,data.c_class,data.img1,data.img2,data.img3,data.img4,data.img5], function (result, fields) {
        if (result.affectedRows) {
            res.end('update success')
        } else {
            res.end('update failed')
        }
    })
})

index.post('/cakeId',rights_api,function(req,res){
    var data = req.body
    // console.log(data)
    db.exec(`SELECT c_id FROM commodity WHERE c_id = ?`,[data.c_id],function(result, fields){
    //    console.log(result[0])
        if(result[0]){
            res.end('0')
        }else{
            res.end('1')
        }
    })
})
//------------新增圖片
index.get('/addimg',rights_api,function(req,res){
    db.exec(`SELECT * FROM commodity`,[],function(data,fields){
        
            
              res.render('addimg.ejs',{
            data:data,
            
        })
        
      
    })
            
})

index.post('/updateImg',rights_api,function(req,res){
    var data = req.body
    var item = [data.img1,data.img2,data.img3,data.img4,data.img5,data.c_id];
    var sql = `UPDATE commodity SET img1 = ?, img2 = ?, img3 = ?, img4 = ?, img5 = ? WHERE commodity.c_id = ?`
    // console.log(data)
    db.exec(sql,item,function(result, fields){
        if (result.affectedRows) {
            res.end('update success')
        } else {
            res.end('update failed')
        }

    })
})
//-----------改權限
index.get('/manage',rights_api,function(req, res){
    db.exec(`SELECT * FROM member;`,[],function(data, fields){
        res.render('manage.ejs',{
            data:data
        })
    })
    
})
index.post('/manage',rights_api,function(req, res){
    var data = req.body;
    // console.log(data)
    var sql = `UPDATE member SET email = ?,m_name = ?,birthday = ?,gender = ?,phone = ?,address = ?,rights = ? WHERE member.m_id = ?`
    db.exec(sql,[data.email,data.m_name,data.birthday,data.gender,data.phone,data.address,data.rights,data.m_id,],function(result, fields){
        if (result.affectedRows) {
            res.end('update success')
        } else {
            res.end('update failed')
        }

    })
})
//--------------查詢分類

index.get('/C05_2_1/:name/:value/:page([0-9]+)', rights_api, function (req, res) {
    var page = req.params.page   //page=網址列的page數字
    var name = req.params.name   
    var value = req.params.value   
    switch (parseInt(value)) {
        case 1:
            var ans = '未製作'
            break;
        case 2:
            var ans = '已製作'
            break;
        case 3:
            var ans = '申請取消'
            break;
        case 4:
            var ans = '已取消'
            break;
        case 5:
            var ans = '未付款'
            break;
        case 6:
            var ans = '已付款'
            break;
        case 7:
            var ans = '已退款'
            break;
        case 8:
            var ans = '未配送'
            break;
        case 9:
            var ans = '已配送'
            break;
        case 10:
            var ans = '未取貨'
            break;
        case 11:
            var ans = '已取貨'
            break;
        case 12:
            var ans = '已取消'
            break;
    
        default:
            break;
    }
    if(page == 0){
        page += 1 ;
    }
    var nums_per_page = 10
    var offset = (page - 1) * nums_per_page
    var sql = `SELECT buy_order.o_id,co_upload_date,pick_up_date,payment,pay_state,pickup_method,co_state,remark,shipping,rec_address,email,m_name,phone,order_total FROM buy_order , member, 
    (
    SELECT o_id, sum(total)as order_total FROM 
    (
    SELECT buy_order.o_id,c_name,price,quantity,price*quantity as total FROM buy_order , cake_order, commodity WHERE buy_order.o_id = cake_order.o_id and cake_order.c_id = commodity.c_id
    )as a 
    GROUP BY o_id
    )as b
    WHERE buy_order.m_id = member.m_id and buy_order.o_id = b.o_id and ${name}= ? LIMIT ${offset}, ${nums_per_page};`  //sql指令 顯示10筆1頁
    // 使用db.js裡的exec函式，也就是apple函式                                // 給函式3個參數
    // db.exec(`SELECT * FROM cake_order LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
    db.exec(sql,
        [ans],                                                                   //有?時填的資料，沒有就給空[]
        function (data, fields) {             //function()的{}頭                                
            // console.log('mask_js_data:',data);  //資料庫傳來的內容 10筆1頁

            db.exec(`SELECT COUNT(*) AS COUNT FROM buy_order`, //sql指令 資料總和
                [],
                function (nums, fields) {

                    db.exec(`SELECT buy_order.o_id,c_name,price,quantity,price*quantity as total FROM buy_order , cake_order, commodity WHERE buy_order.o_id = cake_order.o_id and cake_order.c_id = commodity.c_id`, [], function (orderData, fields) {

                        // console.log('mask_js_nums:',nums); // [COUNT:28]
                        // console.log('mask_js_nums[0].COUNT:',nums[0].COUNT); // 28
                        var last_page = Math.ceil(nums[0].COUNT / nums_per_page) // 無條件進位  28/10 = 3

                        if (page > last_page) { //如果大於最大頁數
                            res.redirect('/C05_2/' + last_page) //跳轉到最後一頁
                            return
                        }else if(page <= 0){
                            res.redirect('/C05_2/1') //跳轉到第一頁
                            return
                        }

                        res.render('C05_2_1.ejs', { //跳轉到index.ejs
                            data: data,
                            order_D: orderData,                   //data:資料庫傳來的內容 10筆1頁
                            curr_page: page,              //curr_page:網址列的page數字
                            total_nums: nums[0].COUNT,    //total_nums: 28
                            last_page: last_page          //last_page: 3
                        })



                    })

                })     //第二個db.exec的()尾 
        })        //function()的{}尾  第一個db.exec的()尾 
})

index.get('/C05_3_1/:name/:value/:page([0-9]+)', rights_api, function (req, res) {
    var page = req.params.page   //page=網址列的page數字
    var name = req.params.name   
    var value = req.params.value 
    switch (parseInt(value)) {
        case 1:
            var ans = '未製作'
            break;
        case 2:
            var ans = '已製作'
            break;
        case 3:
            var ans = '申請取消'
            break;
        case 4:
            var ans = '已取消'
            break;
        case 5:
            var ans = '未聯絡'
            break;
        case 6:
            var ans = '洽談中'
            break;
        case 7:
            var ans = '未付款'
            break;
        case 8:
            var ans = '已付款'
            break;
        case 9:
            var ans = '已退款'
            break;
        case 10:
            var ans = '未配送'
            break;
        case 11:
            var ans = '已配送'
            break;
        case 12:
            var ans = '未取貨'
            break;
        case 13:
            var ans = '已取貨'
            break;
        case 14:
            var ans = '已取消'
            break;
       
    
        default:
            break;
    }
    if(page == 0){
        page += 1 ;
    }
    var nums_per_page = 10
    var offset = (page - 1) * nums_per_page
    // 使用db.js裡的exec函式，也就是apple函式                                // 給函式3個參數
    db.exec(`SELECT cust_id,customized.m_id,m_name,cust_upload_date,cust_form,cust_state,picture,connection,cust_pay,cust_pick,cust_date,cust_price,cust_shipping,cust_pay_state,email,phone,address FROM customized,member WHERE customized.m_id = member.m_id and ${name}= ? LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
        [ans],                                                                   //有?時填的資料，沒有就給空[]
        function (data, fields) {             //function()的{}頭                                
            // console.log('mask_js_data:',data);  //資料庫傳來的內容 10筆1頁

            db.exec(`SELECT COUNT(*) AS COUNT FROM customized`, //sql指令 資料總和
                [],
                function (nums, fields) {
                    // console.log('mask_js_nums:',nums); // [COUNT:28]
                    // console.log('mask_js_nums[0].COUNT:',nums[0].COUNT); // 28
                    var last_page = Math.ceil(nums[0].COUNT / nums_per_page) // 無條件進位  28/10 = 3

                    if (page > last_page) { //如果大於最大頁數
                        res.redirect('/C05_3/' + last_page) //跳轉到最後一頁
                        return
                    }else if(page <= 0){
                        res.redirect('/C05_3/1') //跳轉到第一頁
                        return
                    }

                    res.render('C05_3_1.ejs', { //跳轉到index.ejs
                        data: data,                   //data:資料庫傳來的內容 10筆1頁
                        curr_page: page,              //curr_page:網址列的page數字
                        total_nums: nums[0].COUNT,    //total_nums: 28
                        last_page: last_page          //last_page: 3
                    })
                })     //第二個db.exec的()尾 
        })        //function()的{}尾  第一個db.exec的()尾 
})


module.exports = index;

