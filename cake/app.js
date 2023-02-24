
// 1. 這個範例依照 PDF練習題改寫來的:  28_PDF練習題\16\Module_16_example
// 2. 原始範例的部分內容被精簡或改編，
// 3. 整個專案都沒有註解，請添加註解上去

var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('media')); //提供靜態網頁，等於開放media資料夾的東西
// app.use(express.static(__dirname + '/media')); //提供靜態網頁，等於開放media資料夾的東西

var bodyParser = require('body-parser'); //post 套件
app.use(bodyParser.json());

var session = require('express-session');
app.use(session({
    secret: 'iamagooddeveloperofjavascript,iwilllearnaboutallofthisapplication', //隨意
    resave: false,
    saveUninitialized: false,

    cookie:{
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000 //cookie 存活時間
        // maxAge: 60 * 1000
    }
}))


app.use(function(req, res, next){
    res.locals.session = req.session;
    next();
});


var cake = require('./router/cake')

app.use('/', cake) //使用cake()


app.listen(1802); //使用1802
