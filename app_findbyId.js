// grab the user model
var User = require('./model/user');

// get a user with ID of 1
User.findById('573188db406332c10efc7fc1', function(err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});
