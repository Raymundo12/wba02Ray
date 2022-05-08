const express = require('express')
const { users } = require('moongose/models')
const usersRouter = require('./routes/users')
const app = express()

app.set('view engine', 'ejs')

app.use('/users', usersRouter)


app.get('/', (req, res) => {
    const users = [{
        title: 'Test Users',
        CreateAT: Date.now(),
        description: 'TEST Description'
    },
    {
        title: 'Test Users2',
        CreateAT: Date.now(),
        description: 'TEST Description2'
    }]

   res.render('index', {users: users  })
})

app.listen(5000)