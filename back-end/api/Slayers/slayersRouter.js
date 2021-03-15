const express = require('express');

const Slayers = require('./slayersModel');

const router = express.Router()

router.get('/', (req, res) => {
    Slayers.findAllSlayers()
    .then(slayersArray => {
        if(slayersArray.length > 0) {
            res.status(200).json(slayersArray)
        } else {
            res.status(404).json({errorMessage: '404 could not find slayers'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Slayers.findSlayerByID(id)
    .then(slayer => {
        if(slayer) {
            res.status(200).json(slayer)
        } else {
            res.status(404).json({errorMessage: '404 could not find slayer'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.post('/', (req, res) => {
    const newSlayer = req.body;

    Slayers.addSlayer(newSlayer)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: '404 could not find slayer'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedSlayer = req.body

    Slayers.updateSlayer(id, updatedSlayer)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: '404 could not find slayer'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Slayers.deleteSlayer(id)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: '404 could not find slayer'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

module.exports = router;
