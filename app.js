const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
  // connection.query(
  // 'SELECT*FROM items',
  // (error, results)=>{
  //   console.log(results);
  //   res.render('index.ejs',{items: results});
  //  }
  // );
});

app.get('/new',(req, res) => {
  res.render('new.ejs');
});

app.post('/create',(req, res) => {
  // connection.query(
  // 'INSERT INTO items(name) VALUE(?)',
  // [req.body.itemName]
  // (error, results)=>{
  //   res.redirect('/index')
  //  }
  // );
});

app.listen(3000);