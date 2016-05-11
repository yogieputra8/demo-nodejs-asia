var User = require('./model/user');


var newUser = User({
  name: 'Yogie S P',
  username: 'yogieputra',
  password: '12345',
  admin: false
});


newUser.save(function(err, res, body) {
  if (err) throw err;

  console.log('User created! ' + res.username);
});