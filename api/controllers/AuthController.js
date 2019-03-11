/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const passport = require('passport');
module.exports = {
  login: async function (req, res){
    console.log('login body',req.allParams())
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        console.log("Error  : ",err);
        return res.redirect('/');
      }
      else{
          req.logIn(user,  function(err) {
          req.session.userId = user.id;
          req.session.email = user.email;
          //console.log('req.user',req.user)

          if (err){
            console.log("Error  : ",err);
            res.redirect('/');}
          else {
            console.log('test')
           return  res.redirect('/dashboard')
          }

          // console.log('login successfully');
          });
      }

    })(req, res);
  },
  register:async function(req,res){
    if(req.method==="Get"){
      res.view('register');
    }
  else if(req.method==="POST"){
     // console.log("Body   :  ",req.body);
      let data=req.allParams();
 let role=await Role.findOne({authority:'USER'});
      data.role=role;
console.log("Data   :    ",data);

 let user = await User.create(data);
    console.log("User   :  ",user);
    if(user){
      Mailer.sendWelcomeMail(user);
      console.log('mail is sent')
      return res.redirect('/login');
    }
  }

  },
  logout: function (req, res) {
    req.session.destroy ();
    res.redirect ('/');
  },

};

