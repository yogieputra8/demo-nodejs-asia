// grab the user model
var User = require('./model/user');

 
User.findOneAndUpdate({ username: 'kevinfay' }, { password: '12345' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
