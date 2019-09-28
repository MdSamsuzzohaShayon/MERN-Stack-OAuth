const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

// The Google authentication strategy authenticates users using a Google account and OAuth 2.0 tokens
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done)=>{
        // console.log("Access Token: " + accessToken);
        // console.log("Refresh Token: " + refreshToken);
        console.log("profile: " + profile);
        // console.log("done: " + done);  
        User.findOne({googleId: profile.id})
            .then((existingUser)=>{
                if(existingUser){
                    console.log('User is already there'); 
                    done(null, existingUser);
                }else{
                    new User({googleId: profile.id}).save()
                        .then(user=>{
                            done(null, user);
                        })
                }
            })
    }
    ),
    
);