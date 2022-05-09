const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const app = express(),
logger = require("morgan")

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    const users = [{
        title: 'Test Users',
        DateDepart: new Date(),
        description: 'TEST Description'
    },
    {
        title: 'Test Users 2',
        DateDepart: new Date (),
        description: 'TEST Description 2'
    }]

   res.render('departures/index', {users: users  })
})

app.use('/users', usersRouter)

app.listen(6000), () => {
   console.log("Server Running on Port 3000")

}