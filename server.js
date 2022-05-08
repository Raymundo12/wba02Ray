const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const app = express()

mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true})

app.set('view engine', 'ejs')

app.use('/users', usersRouter)


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

app.listen(6000)