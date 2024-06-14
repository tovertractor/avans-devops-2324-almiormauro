const express = require('express');
const router = express.Router();
const { getUsers } = require('../services/database')

router.get('/', (req, res) => {
    res.send("hello from app2")
})
router.get('/getdata', async (req, res) => {
    var users = await getUsers();
    res.json(users)
})

module.exports = router;