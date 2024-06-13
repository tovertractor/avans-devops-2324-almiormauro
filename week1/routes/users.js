var express = require('express');
var router = express.Router();

const { db} = require('../services/database');

const prom = require("prom-client")
const guage = new prom.Gauge({ name: 'number_requests', help: "number of requests send to user service"})

/* GET users listing. */
router.get('/', async function(req, res) {
    guage.inc()
    let users = await db.collection('users').find().toArray();
    res.json(users);
});

router.post('/', function(req, res) {
    guage.inc()
    db.collection('users').insertOne(req.body)
        .then((user) => res.status(201).json({ "id": user.insertedId }))
        .catch(err => res.status(500).json(err));
})

module.exports = router;
