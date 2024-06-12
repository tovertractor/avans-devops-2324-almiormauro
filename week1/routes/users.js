var express = require('express');
var router = express.Router();

const { db } = require('../database/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let users = await db.collection('users').find().toArray();
    res.json(users);
});

router.post('/', function(req, res, next) {
    db.collection('users').insertOne(req.body)
        .then((user) => res.status(201).json({ "id": user.insertedId }))
        .catch(err => res.status(500).json(err));
})

module.exports = router;
