var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports={

  hashPassword: function (user) {
    console.log('---->>>>>',user.password)
    if (user.password) {
      return user.password = bcrypt.hashSync(user.password);
    }
  },
  comparePassword: function(password, user){
    console.log('password',password)
    console.log('password sync',bcrypt.hashSync(password))
    console.log('password stored',user.password)
    return bcrypt.compareSync(password, user.password);
  },

};
