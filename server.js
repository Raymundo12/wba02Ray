const express = require('express')
const usersRouter = require('/routes/users')
const app = express()

app.set('view engine', 'ejs')

app.use('/users', usersRouter)


app.get('/', (req, res) => {
   res.render('index')
})

app.listen(5000)