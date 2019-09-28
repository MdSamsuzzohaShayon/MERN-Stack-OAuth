const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res)=>{
    res.send('Hi there');
});


app.listen(PORT, ()=>{
    console.log(`Server running: 127.0.0.1:${PORT}`);    
})