const express = require('express')
const { users } = require('moongose/models')
const usersRouter = require('./routes/users')
const app = express()

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

   res.render('index', {users: users  })
})

app.listen(3000)