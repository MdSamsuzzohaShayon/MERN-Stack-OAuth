const express = require('express');
const cookieSession = require('cookie-session');
const authRoutes = require('./routes/authRoute');
const mongoose = require('mongoose');
const keys =require('./config/keys');
const passport = require('passport');


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


// A user session can be stored in two main ways with cookies: on the server or on the client. This module stores the session data on the client within a cookie,
// ENCRIPT DATA THOUGH COOKIE 
app.use(cookieSession({
    // IT WILL EXPIRE AFTER 30 DAYS
    maxAge: 30 * 24 * 60 * 60 *1000 ,
    keys: [keys.cookieKey]
}));


// LINK COOKIE TO PASSPORT
app.use(passport.initialize());
app.use(passport.session());




// ROUTES
app.use('/', authRoutes);




// STARTING THE SERVERS
app.listen(PORT, ()=>{
    console.log(`Server running: 127.0.0.1:${PORT}`);    
})