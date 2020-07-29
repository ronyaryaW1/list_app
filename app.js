const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.static('pubic'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ronyaryawijaya11',
    database: 'list_app'
});
connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
  });

app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('hello.ejs');
    }
  );
});

app.listen(3001);