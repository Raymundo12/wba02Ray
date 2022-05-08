const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('departures/new')
})

module.exports = router