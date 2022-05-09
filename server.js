const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const app = express()

app.set('view engine', 'ejs')

app.use('/users', usersRouter)
app.use(express.urlencoded({ extended: false }))


const database = module.exports = () => {

    const connectionParams = {
        
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
     try {
        mongoose.connect('mongodb+srv://Raymundo:19831027%Fel@cluster0.pcxue.mongodb.net/books?retryWrites=true&w=majority')
     } catch (error) {

     }
    
}



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