const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/',(req, res, next)=>{
    res.render('index');
});
router.get('/signup',(req, res, next)=>{
    res.render('signup');
});
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/signin',(req, res, next)=>{
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));
/*
router.get('/logout',(req, res, next)=>{
    req.logout();
    res.redirect('/');
});
*/
//function para logout y validar los perfiles 

router.get('/logout', function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });
/*
router.use((req, res, next)=>{
    isAuthenticated(req,res, netx);
    next();
});
*/
router.get('/profile',isAuthenticated, (req, res, next) => {
  res.render('profile');
});



function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}

module.exports= router;