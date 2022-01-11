require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const playerRoute = require('./router/players');
const patientRoute = require('./router/patient');
const PORT = process.env.PORT || 5000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use(express.json());
//routes
app.use('/players',playerRoute);
app.use('/players_stats',patientRoute);

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
  
    res.status(500).json({
      message: "Something went rely wrong",
    });
});


app.listen(PORT,()=>{
    console.log(`Server is running at PORT no ${PORT}`);
});