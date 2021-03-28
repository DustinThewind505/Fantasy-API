const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const restricted = require('./restrictedMiddleware');
const Roles = require('../api/Users/rolesModel');
const User = require('../api/Users/usersModel');

const router = express.Router();

router.get('/roles', (req, res) => {
    Roles.findAll()
    .then(rolesArray => {
        res.status(200).json(rolesArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/users', (req, res) => {
    User.findAllUsers()
    .then(usersArray => {
        if(usersArray.length > 0) {
            res.status(200).json(usersArray)
        } else {
            res.status(404).json({errorMessage: 'Could not find users'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.post('/register', (req, res) => {
    const newUser = req.body;

    const rounds = process.env.HASH_ROUNDS || 4;
    const hash = bcrypt.hashSync(newUser.password, rounds);

    newUser.password = hash;

    User.addUser(newUser)
    .then(count => {
        if(newUser) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: 'Please enter valid credentials'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Must enter credentials'})
    })

})

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    User.findUserBy({username}).first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = createJWT(user)
            res.status(200).json({user, token})
        } else {
            res.status(401).json({errorMessage: 'username or password is incorrect'})
        }
    })
    .catch( err => {
        res.status(500).json({errorMessage: 'Must enter credentials'})
    })

})

function createJWT(obj) {
    const payload = {
        userID: obj.userID,
        username: obj.username,
        userRole: obj.userRole
    }

    const secret = process.env.JWT_SECRET || 'Lambda';

    const options = {
        expiresIn: '120000ms'
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router;
