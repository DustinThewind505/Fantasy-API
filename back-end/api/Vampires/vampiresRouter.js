const express = require('express');

const Vampires = require('./vampiresModel');

const router = express.Router()

router.get('/', (req, res) => {
    Vampires.findAllVampires()
    .then(vampiresArray => {
        if(vampiresArray) {
            res.status(200).json(vampiresArray)
        } else {
            res.status(404).json({errorMessage: '404 could not find vampires'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Vampires.findVampireByID(id)
    .then(vampire => {
        if(vampire) {
            res.status(200).json(vampire)
        } else {
            res.status(404).json({errorMessage: '404 could not find vampire'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.post('/', (req, res) => {
    const newVampire = req.body;

    Vampires.addVampire(newVampire)
    .then(count => {
        if(count > 0) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: '404 could not find vampire'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedVampire = req.body

    Vampires.updateVampire(id, updatedVampire)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: '404 could not find vampire'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Vampires.deleteVampire(id)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: '404 could not find vampire'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

module.exports = router;
