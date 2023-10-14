const seneca = require('seneca')();
seneca.add({ role: 'user', cmd: 'create' }, (msg, respond) => {
const newUser = { name: msg.name, email: msg.email };
respond(null, newUser); 
});
// Send a message to create a user
seneca.act({ role: 'user', cmd: 'create', name: 'sunnyakshi', email: 'sunnymallela2@gmail.com' }, (err, user) => {
  if (err) {
     console.error('Error:', err);
  } else {
    console.log('User created:', user);
  }
});
