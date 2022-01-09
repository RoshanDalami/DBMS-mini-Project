require('dotenv').config()
const express = require('express');
const app = express();
const donorRoute = require('./router/donor');
const patientRoute = require('./router/patient');
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended:false}))
app.use(express.json());
//routes
app.use('/donor',donorRoute);
app.use('/patient',patientRoute);

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