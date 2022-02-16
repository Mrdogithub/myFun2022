const mysql = require('mysql')

const connection = mysql.createConnection({mysqlConfig})
var mysqlConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'dFord',
    port: 3306
};
connection.connect()
module.exports = mysql;