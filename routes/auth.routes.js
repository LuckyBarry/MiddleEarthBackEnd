const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('../middlewares/routeGuard.middleware')

const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.json('All good in auth')
})


// make a post for the signup routes! (mat)
// supposed to work with your req.body to get back the credentials of your user
// encrypt the password with bcryptjs (you need to genarate a salt 10 ten times is fine)
// create your user in mongodb

router.post('/signup', async (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const passwordHash = bcrypt.hashSync(req.body.password, salt)
    console.log(passwordHash)
    try {
        const newUser = await User.create({ ...req.body, passwordHash })
        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})



// make a post for the login routes! (mat)
// check if the user exist with your req.body again
// if the user exist, you need to check if the password is correct with bcryptjs
// sign your json webtoken

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const potentialUser = await User.findOne({ email })
    if (potentialUser) {
        if (bcrypt.compareSync(password, potentialUser.passwordHash)) {

            const authToken = jwt.sign({ userId: potentialUser._id }, process.env.TOKEN_SECRET, {
                algorithm: 'HS256',
                expiresIn: '6h',
            })

            res.status(200).json({ token: authToken })
        } else {
            // Bad password
            res.status(400).json({ message: 'Bad password' })
        }
    } else {
        // No user with this username
        res.status(400).json({ message: "User doesn't exists" })
    }
})



// make a get for the verify routes! (mat)
// to make this route work as expected you need to use the middleware (isauthenticated) see lecture)

router.get('/verify', isAuthenticated, (req, res) => {
    console.log(req.payload)
    res.json(req.payload)
})



module.exports = router;
