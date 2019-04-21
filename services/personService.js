'use strict';
var Person = require('../config/db');

module.exports = new class PersonService {

    getAll() {
        return Person.find();
    }

    getById(id) {
        return Person.findById(id);
    }

    create(person) {
        return Person.create(person);
    }

    update(id, person) {
        return Person.findByIdAndUpdate(id,person);
    }

    delete(id) {
        return Person.findByIdAndDelete(id);
    }
}