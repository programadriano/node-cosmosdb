

const PersonService = require('../services/personService');

exports.get = (req, res, next) => {
    PersonService.getAll()
    .then((person) => {
        res.status(200).send(person);
    }).catch(err => res.status(500).send(err))
};


exports.getById = (req, res, next) => {
    const _id = req.params.id;

    PersonService.getById(_id)
        .then((person) => {
            res.status(200).send(person);
        }).catch(err => res.status(500).send(err))
};

exports.post = (req, res, next) => {
    const vm = req.body;

    PersonService.create(vm)
        .then(() => {
            res.status(200).send(`Person criada com sucesso!`);
        }).catch(err => res.status(500).send(err))
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    
    const vm = req.body;

    PersonService.update(id,vm)
        .then(() => {
            res.status(200).send(`Person atualizada com sucesso!`);
        }).catch(err => res.status(500).send(err))

};

exports.delete = (req, res, next) => {
  
PersonService.delete(id)
    .then(() => {
        res.status(200).send(`Person deletada com sucesso!`);
    }) .catch(err => res.status(500).send(err)) 
};