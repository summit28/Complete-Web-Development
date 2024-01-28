// Mongoose is an Object Data Modeling (ODM) library for Node. js that provides a higher-level abstraction layer on top of MongoDB
// mongoose will help to connect mongodb from node.js
// we will tell mongoose form node.js and mongoose will do that work in mondgodb
// mongoshell is client which connect to mongod process

var mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/emp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//    we're connected!
// });

var kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function speak() {
    var greeting = " My name is "+ this.name
    console.log(greeting);
  };

var Kitten = mongoose.model('silence', kittySchema);

var silence = new Kitten({ name: 'Peter' });
var silence1 = new Kitten({ name: 'Gwen' });

//console.log(silence.name); // 'Silence'
//silence.speak();

silence.save();
silence.speak();

silence1.save();
silence1.speak();

Kitten.find({ name:"Peter" });
console.log(silence);