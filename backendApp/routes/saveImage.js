var express = require('express');
var router = express.Router();
const mysql = require('mysql')

const connection = mysql.createConnection( {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: "3306",
    database: "dford"
})
// y 


let insertSql = 'INSERT INTO imageData(id,value,userName) VALUES(uuid_short(),?,?)';
/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body.image+ 'ssss')
    const id = Math.random().toString(36).substring(-10);
    const {image, userName} = req.body;
    console.log(image,userName,id)
    connection.connect()
    connection.query(insertSql,[image,userName],function(error,result){
        if(result) {
            console.log('insert done')
        }
        console.log(error)
    })

    connection.release();
    res.send('hello , world');
});

module.exports = router;
