var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wifi1234',
  database: 'delivery'
})

connection.connect()

connection.query('SELECT username FROM users', function (err, rows, fields) {
  if (err) throw err

  console.log(rows[0].username)
})

connection.end()
