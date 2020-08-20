const express = require('express')

const controller = require('../controllers/auth')

const router = express.Router()
// localhost:5000/api/auth
router.get('/login', controller.login)
router.get('/register', controller.register)

module.exports = router