var mongoose = require('mongoose');

mongoose.connect("mongodb://{host}:{porta}/?ssl=true&replicaSet=globaldb", {
    auth: {
      user: "{usuario}",
      password: "{password}"
    }
  })

PersonSchema = require('../models/person');

var Person = mongoose.model('Person', PersonSchema);
module.exports = Person;
