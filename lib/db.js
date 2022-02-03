var mysql = require('mysql');
var db = mysql.createConnection({
	host	 : 'localhost',
	user	 : 'root',
	password : 'pwd123',
	database : 'temptable'
});

db.connect();

module.exports = db;