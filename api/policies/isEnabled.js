module.exports =async function(req, res, next){
  console.log("User Enabled   :  ");
  if(req.user.isAuthenticate ){
    let enabledUser=await User.findOne({id:req.user.id,where:{enabled:true}})
    if(enabledUser){
      return next();
    }
    else {

      return res.redirect('/dashboard');
    }

  }
};
