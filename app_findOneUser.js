// grab the user model
var User = require('./model/user');

// get the user starlord55
User.find({ username: 'kevinfay' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});
