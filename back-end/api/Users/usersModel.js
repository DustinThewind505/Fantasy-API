const knex = require('knex');

const db = require('../../data/db-config');

module.exports = {
    findAllUsers,
    findUserBy,
    findUserByID,
    addUser
}

function findAllUsers() {
    return db('users')
}

function findUserBy(filter) {
    return db('users').where(filter)
}

function findUserByID(id) {
    return db('users').where('userID', id).first()
}

function addUser(reqBody) {
    return db('users').insert(reqBody)
}
