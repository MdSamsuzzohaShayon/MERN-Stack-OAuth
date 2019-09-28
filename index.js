const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

const PORT = process.env.PORT || 5000;

// client id     152144424568-rkqgndu7grjdm3aetoocoacpbbtjp99v.apps.googleusercontent.com
// client secret    dTkn3U9VaEUqig38rg9IHWbm






// Configure Strategy
// The Google authentication strategy authenticates users using a Google account and OAuth 2.0 tokens
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done)=>{
        console.log("Access Token: " + accessToken);
        console.log("Refresh Token: " + refreshToken);
        console.log("profile: " + profile);
        console.log("done: " + done);        
    }
    ),
    
);



// 9. For temporarily change or add new authorised redirects urls from client id for web application
// 10. URL `http://localhost:5000/auth/google/callback`
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));


app.listen(PORT, ()=>{
    console.log(`Server running: 127.0.0.1:${PORT}`);    
})