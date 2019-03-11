module.exports.sendWelcomeMail = function(user) {
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
}
