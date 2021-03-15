const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../api/Users/usersModel');

const router = express.Router();

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
            res.status(200).json(user)
        } else {
            res.status(401).json({errorMessage: 'username or password is incorrect'})
        }
    })
    .catch( err => {
        res.status(500).json({errorMessage: 'Must enter credentials'})
    })

})

module.exports = router;
