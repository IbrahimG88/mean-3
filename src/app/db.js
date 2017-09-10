/*

// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
//1: Schema
  var kittySchema = mongoose.Schema({
    sportType: String
});

//2: Model
  var Kitten = mongoose.model('Kitten', kittySchema);


  //3: Document creation 
  var silence = new Kitten({ sportType: 'Silencessscxsx' });
console.log(silence.sportType); // 'Silence'

//Save it:
silence.save(function (err, silence) {
  if (err) return console.error(err);

});

//find them all
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})
});

*/