var proxy = require('http-proxy-middleware');
 
module.exports = (app)=>{
    app.use(
        '/auth/google',
        proxy({ target: 'http://localhost:5000/'})
      );
}
 
