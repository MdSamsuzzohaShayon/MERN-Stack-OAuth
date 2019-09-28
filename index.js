const express = require('express');
const authRoutes = require('./routes/authRoute');
const mongoose = require('mongoose');
const keys =require('./config/keys');


const app = express();

const PORT = process.env.PORT || 5000;

// client id     152144424568-rkqgndu7grjdm3aetoocoacpbbtjp99v.apps.googleusercontent.com
// client secret    dTkn3U9VaEUqig38rg9IHWbm


// MONGO DB SCHEMA
require('./models/User');

// Configure Strategy
require('./services/passport');


// MONGODB SETUP
mongoose.connect(keys.mongoURI, ()=>{
    console.log('Connected to DB');
});




// ROUTES
app.use('/', authRoutes);




// STARTING THE SERVERS
app.listen(PORT, ()=>{
    console.log(`Server running: 127.0.0.1:${PORT}`);    
})