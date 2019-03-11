module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("Authenticated")
    return next();
    /*if(req.user.enabled){
      return next();
    }else{
      //todo please verify your email Address.
      return res.redirect('/')
    }*/

  }
  else{
    return res.redirect('/');
  }
};
