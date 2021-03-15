const knex = require('knex');

const db = require('../../data/db-config');

module.exports = {
    findAllVampires,
    findVampireBy,
    findVampireByID,
    addVampire,
    updateVampire,
    deleteVampire
}

function findAllVampires() {
    return db('vampires')
}

function findVampireBy(filter) {
    return db('vampires').where(filter)
}

function findVampireByID(id) {
    return db('vampires').where('vampireID', id).first()
}

function addVampire(reqBody) {
    return db('vampires').insert(reqBody)
}

function updateVampire(id, reqBody) {
    return db('vampires').where('vampireID', id).update(reqBody)
}

function deleteVampire(id) {
    return db('vampires').where('vampireID', id).delete()
}
