module.exports={
  sendWelcomeMail :function(user) {
    sails.hooks.email.send(
      "WelcomeEmail",
      {
        Name: user.firstName,

      },
      {
        to: user.email,
        subject: "Welcome Email"
      },
      function(err) {console.log(err || "Mail Sent!");}
    )
  },
  sendChangePasswordMail:function (user) {
    console.log(user,'-------------------------------')
    sails.hooks.email.send(
      "ChangePassword",
      {
     Name:user.firstName,
       Id:user.id,
      },
      {
        to:user.email,
        subject:"change password Email"
      },
      function(err){console.log(err||"Mail is sent!");}

    )
  },
};

