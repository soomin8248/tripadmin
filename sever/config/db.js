var mysql = require('mysql');
const db = mysql.createPool({
    host : '34.134.213.48',
    user : 'root',
    password : 'kosha1231!',
    database : 'trip'
});

module.exports = db;