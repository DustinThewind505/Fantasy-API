const knex = require('knex');

const db = require('../../data/db-config');

module.exports = {
    findAllSlayers,
    findSlayerBy,
    findSlayerByID,
    addSlayer,
    updateSlayer,
    deleteSlayer
}

function findAllSlayers() {
    return db('slayers')
}

function findSlayerBy(filter) {
    return db('slayers').where(filter)
}

function findSlayerByID(id) {
    return db('slayers').where('slayerID', id).first()
}

function addSlayer(reqBody) {
    return db('slayers').insert(reqBody)
}

function updateSlayer(id, reqBody) {
    return db('slayers').where('slayerID', id).update(reqBody)
}

function deleteSlayer(id) {
    return db('slayers').where('slayerID', id).delete()
}
