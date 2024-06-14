const express = require('express');
const router = express.Router();
const { getUsers } = require('../services/database')

const prom = require("prom-client")
const guage = new prom.Gauge({ name: 'number_requests_to_app2', help: "number of requests send to app2 job"})

router.get('/', (req, res) => {
    guage.inc()
    res.send("hello from app2")
})
router.get('/getdata', async (req, res) => {
    guage.inc()
    var users = await getUsers();
    res.json(users)
})

module.exports = router;