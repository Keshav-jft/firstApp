/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  displayUser: async function (req, res){
    let user=await User.find().populate('role')
    res.view('userList',{user:user})

  },
  pendingUser:async function(req,res) {
    let pendingUser = await User.find({enabled: false})
  res.view('pendingUserList',{user:pendingUser})
  },
  approvedUser:async function(req,res) {
      console.log(req.param('id'));
      let approvedUser = await User.update({id: req.param('id')}, {enabled: true});
      res.redirect('/pendingUser');

  },
  approvedList:async function(req,res){
    let approvedUser=await User.find({enabled:true}).populate('role')
    res.view('approvedUserList',{user:approvedUser})

  },
};


