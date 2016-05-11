var User = require('./model/user');


var newUser = User({
  name: 'Kevin Faeyza Rasydan',
  username: 'kevinfay',
  password: '1234',
  admin: true
});


newUser.save(function(err, res, body) {
  if (err) throw err;

  console.log('User created! ' + res.name);
});