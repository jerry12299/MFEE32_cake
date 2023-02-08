var mysql = require('mysql'); //執行mysql套件

function apple(sql, data, callback) { //創function apple 與3個參數 (sql, data, callback)  
 
    const connection = mysql.createConnection({ //創小幫手
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cake',
        multipleStatements: true, //多語句執行設定
    });
    connection.connect(); //資料庫連線

    connection.query(sql, data, function (error, results, fields) {
        if (error) {
            console.log(error)
        };
        callback(results, fields);
    })
    connection.end();
}

module.exports.exec = apple //apple()模組化給大家使用，使用時用exec稱呼