const express = require('express');
const config = require('./config');
const cors = require('cors')

const authRouter = require('./auth/auth.routes').router
const userControllers = require('./users/users.controllers');
const { toPromise } = require('./utils/toPromise');

const app = express();

app.use(express.json())
app.use(cors())

app.use('/api/v1/auth', authRouter)
app.get('/api/v1/post', (req,res) => {
    res.status(401).json()
})

app.get('/api/v1/users', async(req, res) => {
    //! userControllers.getAllUsers()
    //!     .then((response) => {
    //!         res.status(200).json(response)
    //!     })

    const [users, error] = await toPromise(userControllers.getAllUsers())
    if(error || !users){
        res.status(400).json({message: 'Ups, ocurrio un error'})
    }
    res.status(200).json(users)

})


app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})

module.exports = {
    app,
};
