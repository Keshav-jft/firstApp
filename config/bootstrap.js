/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap =async function(cb) {

  let userList=await User.find();
  await Role.findOrCreate({authority:'ADMIN'});
  await Role.findOrCreate({authority:'USER'});

  if(userList.length<=0) {
    let role=await Role.findOne({authority:'ADMIN'});
    await User.create({email: 'admin@gmail.com', password: '12345',enabled:true,role:role});
  }


  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
