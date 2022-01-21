require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const exphbs = require('express-handlebars');
const port = process.env.PORT || 5005;
const app = express();


//parsing middleware
//parsing application /x-www-form url-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const handlebars = exphbs.create({extname:'.hbs'})
//static files
app.use(express.static('public'));
//templeting engines
app.engine('.hbs', handlebars.engine); // setting engine to hbs
app.set('view engine', '.hbs');
app.set('views', './views');


//routing




//connecting to database;
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
//connect to database
pool.getConnection((err,result)=>{
    if(err) throw err; //if error
    console.log('connected to database...')
});
// const login = require('./server/router/admin');
// app.use('/',login)

//acquiring routes path 
const routes = require('./server/router/players');
app.use('/',routes);

app.listen(port, () => {
    console.log(`server running at port :${port}`)
});
