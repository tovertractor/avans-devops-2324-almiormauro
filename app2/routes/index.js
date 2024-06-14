const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello from app2")
})
router.get('/sendmessage', (req, res) => {
    res.send('hello from sendmessage')
})

module.exports = router;