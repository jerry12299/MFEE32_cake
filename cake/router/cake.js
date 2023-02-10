var express = require("express");
var multer = require('multer'); //上傳檔案
var index = express.Router(); //路由
var db = require('../db.js');//讀取資料庫

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


index.get('/C01',function(req,res){ //主題蛋糕頁
    res.render('C01.ejs')
})
index.get('/C02',function(req,res){ //客制蛋糕頁
    res.render('C02.ejs')
})
index.get('/C03',function(req,res){ //餡料介紹
    res.render('C03.ejs')
})
index.get('/C04',function(req,res){ //常見問題
    res.render('C04.ejs')
})
index.get('/C05',function(req,res){ //登入頁
    res.render('C05.ejs')
})

index.post('/C05', function (req, res) {
    var sql = `SELECT * FROM member WHERE email=? and pwd=?;` //查詢使用者帳密
    var data = [req.body.account, req.body.password] //2個?
    db.exec(sql, data, function (results, fields) {
        if (results[0]) { //結果成立
            req.session.user = {    //紀錄session.user

                m_id: results[0].m_id,
                rights: results[0].rights,

            }
            // console.log(req.session.user);
            res.end('login success')
        } else {
            res.end('login failed')
        }
    })
})



index.get('/C06',function(req,res){ //購物車
    res.render('C06.ejs')
})





//--------------------- 主題蛋糕
//([0-9]+) 0-9 不限數量
index.get('/C05_2/:page([0-9]+)',rights_api, function (req, res) {
    var page = req.params.page   //page=網址列的page數字
    var nums_per_page = 10
    var offset = (page - 1) * nums_per_page
    // 使用db.js裡的exec函式，也就是apple函式                                // 給函式3個參數
    // db.exec(`SELECT * FROM cake_order LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
    db.exec(`select co_id,m_id,co_upload_date,pick_up_date,c_name,quantity,co_state,method,remark FROM cake_order,commodity WHERE cake_order.c_id = commodity.c_id LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
        [],                                                                   //有?時填的資料，沒有就給空[]
        function (data, fields) {             //function()的{}頭                                
            // console.log('mask_js_data:',data);  //資料庫傳來的內容 10筆1頁

            db.exec(`SELECT COUNT(*) AS COUNT FROM cake_order`, //sql指令 資料總和
                [],
                function (nums, fields) {
                    // console.log('mask_js_nums:',nums); // [COUNT:28]
                    // console.log('mask_js_nums[0].COUNT:',nums[0].COUNT); // 28
                    var last_page = Math.ceil(nums[0].COUNT / nums_per_page) // 無條件進位  28/10 = 3

                    if (page > last_page) { //如果大於最大頁數
                        res.redirect('/C05_2/' + last_page) //跳轉到最後一頁
                        return
                    }

                    res.render('C05_2.ejs', { //跳轉到index.ejs
                        data: data,                   //data:資料庫傳來的內容 10筆1頁
                        curr_page: page,              //curr_page:網址列的page數字
                        total_nums: nums[0].COUNT,    //total_nums: 28
                        last_page: last_page          //last_page: 3
                    })
                })     //第二個db.exec的()尾 
        })        //function()的{}尾  第一個db.exec的()尾 
})
//-------------------------客製化頁面
index.get('/C05_3/:page([0-9]+)',rights_api, function (req, res) {
    var page = req.params.page   //page=網址列的page數字
    var nums_per_page = 10
    var offset = (page - 1) * nums_per_page
    // 使用db.js裡的exec函式，也就是apple函式                                // 給函式3個參數
    db.exec(`SELECT * FROM customized LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
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






//-----------------------註冊
index.get('/C05_1', function (req, res) {
    res.render('C05_1.ejs') //跳轉註冊頁
})


// //從C05_1.ejs傳回來
index.post('/C05_1', function (req, res) {
    var body = req.body      //回傳的 post 資料
    // console.log('body-t:', body);
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
            var data = [body.email, body.password, body.name, body.birthday, body.gender, body.phone, body.address];

            db.exec(sql, data, function (results, fields) {
                //results.insertId 新id
                console.log("results:", results)

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




//---------------上傳檔案

var rabbit = multer.diskStorage({
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
var cat = multer({ storage: rabbit
    //,
                    // fileFilter:function(){
                    //     if(file.mimetype != 'image/gif'  &&   file.mimetype != 'image/png'    ){
                    //        //跟使用者說檔案必須是 gif 或者 png     
                    //     }

                    //}

});


index.get('/C02_1', function (req, res) {
    res.render('C02_1.ejs') //跳轉到客制化.ejs
})

index.post('/C02_1', login_api,cat.single('img'), function (req, res) {
    var body = JSON.parse(req.body.data)       //回傳的 post 資料
    var form = `${body.size},${body.taste}口味`
    // console.log(req.file.filename); //檔名
    
    var sql = `INSERT INTO customized(m_id,cust_form,cust_state,picture) VALUES(?,?,?,?);`
    // post資料做成陣列 傳來的必為字串
    // parseInt 轉數字
    var data = [body.m_id, form, '未製作', req.file.filename]
    db.exec(sql, data, function (results, fields) {
        //results.insertId 新id
        if (results.insertId) {
            res.end('insert success: ' + results.insertId);
        } else {
            res.end('insert failed');
        }
    })
    
})

//-------------會員介面
// index.get('/C05_4',login_api,function(req,res){ //主題蛋糕頁
//     res.render('C05_4.ejs')
// })

index.get('/C05_4/:page([0-9]+)',login_api, function (req, res) {
    var page = req.params.page   //page=網址列的page數字
    var nums_per_page = 10
    var offset = (page - 1) * nums_per_page
    // 使用db.js裡的exec函式，也就是apple函式                                // 給函式3個參數
    // db.exec(`SELECT * FROM cake_order LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
    db.exec(`select co_id,m_id,co_upload_date,pick_up_date,c_name,quantity,co_state,method,remark FROM cake_order,commodity WHERE cake_order.c_id = commodity.c_id and cake_order.m_id = ? LIMIT ${offset}, ${nums_per_page};`,  //sql指令 顯示10筆1頁
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
                        res.redirect('/C05_4/' + last_page) //跳轉到最後一頁
                        return
                    }

                    res.render('C05_4.ejs', { //跳轉到index.ejs
                        data: data,                   //data:資料庫傳來的內容 10筆1頁
                        curr_page: page,              //curr_page:網址列的page數字
                        total_nums: nums[0].COUNT,    //total_nums: 28
                        last_page: last_page          //last_page: 3
                    })
                })     //第二個db.exec的()尾 
        })        //function()的{}尾  第一個db.exec的()尾 
})

//-------------登出

index.get('/logout', function (req, res) {
    req.session.destroy() // 刪光session 
    res.redirect('/')
    // res.render('.ejs') //跳轉到客制化.ejs
})
//---------------會員資料修改
index.get('/C05_4_1',login_api, function (req, res) {
    var sql = `SELECT * FROM member WHERE m_id = ?`;
    var data = [req.session.user.m_id];
    db.exec(sql,data,function(data, fields){
        console.log(data[0]);
    res.render('C05_4_1.ejs',{
        data: data[0]
    })
    })
    
})

index.post('/C05_4_2',login_api,function(req, res){
    var sql = `UPDATE member SET pwd =?,m_name	= ?,birthday= ? ,gender= ?, phone = ?, address = ? WHERE member.m_id = ?;`;
    var data = [req.body.pwd,
                req.body.m_name,
                req.body.birthday,
                req.body.gender,
                req.body.phone,
                req.body.address,
                req.session.user.m_id];
     console.log(data);           
    db.exec(sql,data,function(result, fields){
        if (result.affectedRows) {
            res.end('update success')
        } else {
            res.end('update failed')
        }
    })
})

module.exports = index;

