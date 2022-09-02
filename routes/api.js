const express = require('express')
const router = express()

router.get('/', (req, res) => {
    res.send('DEPLOYED MERN: from /api route')
})

module.exports = router