const express = require('express')
const router = express()

router.get('/', (req, res) => {
    res.redirect('/index')
})

module.exports = router