const express = require('express');
const loginRoute = express.Router();


//// Get Login Page
loginRoute.get('/login', (req, res, next) => {
  res.render('login-view.ejs', {
    title: 'Login'
  });
});

//////POST Login

loginRoute.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;


  if (username === '' || password === '') {
    res.render('/login');
    return;
  }

});


module.exports = loginRoute;
