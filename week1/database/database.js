require('dotenv').config();
const { MongoClient } = require("mongodb")

const uri = process.env.DB_URL

const client = new MongoClient(uri)

db = client.db(process.env.DB_NAME)

module.exports = {
    db: db,
    client: client,
}