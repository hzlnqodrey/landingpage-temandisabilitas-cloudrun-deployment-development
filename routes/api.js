const express = require('express')
const router = express()

router.get('/', (req, res) => {
    res.status(200)
    res.send("")
    res.redirect('/')
})

module.exports = router