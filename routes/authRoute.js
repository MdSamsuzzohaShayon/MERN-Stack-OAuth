const express = require('express');
const router = express.Router();
const passport = require('passport');



// 9. For temporarily change or add new authorised redirects urls from client id for web application
// 10. URL `http://localhost:5000/auth/google/callback`
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));




// REDIRECT REQUEST
router.get('/auth/google/callback', passport.authenticate('google'));


module.exports = router;