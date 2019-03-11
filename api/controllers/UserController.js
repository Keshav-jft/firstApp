var bcrypt = require('bcrypt');
var nbcrypt=require('bcrypt-nodejs');
module.exports = {
  dashboard:async function(req,res) {
    console.log('-----------------test---------------------',req.user)
    let existingUser = await User.findOne({id: req.user.id}).populate('role');
    console.log(existingUser)
    let count=0;
    if (existingUser.role[0].authority === 'ADMIN') {
      let users = await Role.findOne({authority: 'USER'}).populate('user');
      let userlist=await User.find({enabled:false})
     let approvedUser= users.user.length-userlist.length

      console.log("totalUsers  :  ", users);

      res.view('admin', {totalUsers: users.user.length,pendingUser:userlist.length,approvedUser:approvedUser});
    }
   else if(existingUser.role[0].authority==='USER'){

      res.view('user');
    }

  },
  viewProfile: async function (req, res) {
    let user = await User.findOne({id:req.user.id}).populate('role');
    if(user.role[0].authority==='USER'){
      console.log('----display-----',user);
      return res.view('userProfile',{user:user })
    }
  },
  updateUser:async function(req,res){
    if(req.method==='POST')
    {

      let updateUser=await User.update({id:req.user.id},req.body)
      if(updateUser.length>0)
      {
        let user=await User.findOne({id:req.user.id})
        res.view('updateProfile',{user:user,message:'Profile update successfully.',isUpdate:true});

      }
    }else
    {
      let user=await User.findOne({id:req.user.id})
      res.view('updateProfile',{user:user,isUpdate:false});


    }

  },
  updatePassword:async function(req,res){
    if(req.method==='POST'){
      console.log(req.allParams())
      let user=await User.findOne({id:req.user.id}).populate('role');
      bcrypt.compare(req.body.password, user.password, async function (err, result){
        if (!result)
        {
          console.log('incorrect')
          return res.json({message:'Password not match'})
        }
        let updatePassword=await User.update({id:req.user.id},{password:  nbcrypt.hashSync(req.body.newPassword)});
        console.log('-------------------',updatePassword)
       // return res.json({message:'Password update'})
        return res.redirect('/dashboard');
      })


      }

    },
  /*create: function (req, res) {
    User.create(req.body).exec(function (err, user) {
      if (err) {
        return res.json(err.status, {err: err});
      }
      if (user) {
        Mailer.sendWelcomeMail(user);
        res.json(200, {user: user});
      }
    });
  },
*/
};
