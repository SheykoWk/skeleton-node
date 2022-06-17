const { toPromise } = require("../utils/toPromise")
const userControllers = require('./users.controllers')

const getMyUserData = (req, res) => {
    console.log(req)
    const [user, err] = toPromise(userControllers.getUserById())
    res.status(200).json({message: 'all good'})
}


module.exports = {
    getMyUserData
}
