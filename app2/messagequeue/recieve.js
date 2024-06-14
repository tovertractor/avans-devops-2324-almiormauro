const amqp = require('amqplib/callback_api');
const { addUser } = require('../services/database')

function recieveMessage(){
    amqp.connect(process.env.AMQP_URL, function(err, connection) {
        if(err){
            throw err;
        }
        connection.createChannel(function(err, channel) {
            if(err){
                throw err
            }
            
            const queue = "devops"
            
            channel.assertQueue(queue, {
                durable: false
            })
            
            console.log("app2 waiting for messages in %s.", queue)
            channel.consume(queue, function(msg){
                console.log(`Recieved ${msg.content.toString()} from week1`)
                var user = msg.content.toString();
                console.log(user)
                addUser(user)
            },{
                noAck: true
            })
        })
    })
}

module.exports = recieveMessage