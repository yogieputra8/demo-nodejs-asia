// grab the user model
var User = require('./model/user');

 

User.find({ admin: true }).where('username').exec(function(err, users) {
  if (err) throw err;

  // show the admins in the past month
  console.log(users);
});
