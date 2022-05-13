const express = require('express')
const Departures = require('./../models/departure')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('departures/new', { departures: new Departures() })
})

router.get('/:id', (res, req) =>{
   res.send(req.params.id)
})

router.post('/', async (req, res) => {
    let departures = new Departures({
      title: req.body.title,
      description: req.body.description,
      markdown: req.body.markdown,
    })
try {
departures = await departures.save()
   res.redirect(`/users/${users.id}`)
} catch (e) {
    console.log(e)
    res.render('departures/new', {departures: departures })
}

})

module.exports = router