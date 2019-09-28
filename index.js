const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const authRoutes = require('./routes/authRoute');



const app = express();

const PORT = process.env.PORT || 5000;

// client id     152144424568-rkqgndu7grjdm3aetoocoacpbbtjp99v.apps.googleusercontent.com
// client secret    dTkn3U9VaEUqig38rg9IHWbm






// Configure Strategy
require('./services/passport');




// ROUTES
app.use('/', authRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running: 127.0.0.1:${PORT}`);    
})