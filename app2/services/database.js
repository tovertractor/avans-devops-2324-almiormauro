require('dotenv').config();
const { MongoClient } = require("mongodb")

const uri = process.env.MONGO_URL

const client = new MongoClient(uri)

const db = client.db(process.env.DB_NAME)

function addUser(name){
    db.collection('users').insertOne({name})
}

async function getUsers(){
    let users = await db.collection('users').find().toArray();
    return users;
}

module.exports = {
    db: db,
    client: client,
    addUser: addUser,
    getUsers: getUsers,
}