module.exports =async function(req, res, next){
  console.log("User Enabled   :  ");

    let user=await User.findOne({id:req.user.id})
    if(user.enabled){
      return next();
    }
    else {

      return res.redirect('/dashboard');
    }


};
