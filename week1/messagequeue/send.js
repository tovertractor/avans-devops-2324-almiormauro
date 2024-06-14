const amqp = require("amqplib/callback_api");

const sendMessage = (message) => {
    amqp.connect(process.env.AMQP_URL, (err, connection) => {
        if(err){
            throw err
        }
        connection.createChannel(function(err2, channel){
            if(err2){
                throw err2
            }
            
            const queue = "devops"
            
            channel.assertQueue(queue, {
                durable: false
            })
            
            channel.sendToQueue(queue, Buffer.from(message))
            console.log("week1 sent username: %s", message)
            setTimeout(function (){
                connection.close()
            }, 500)
        })
    })
}

module.exports = sendMessage