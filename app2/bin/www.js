const app = require('../index')
const PORT = process.env.PORT || 5001;
const recieveMessage = require('../messagequeue/recieve')

app.listen(PORT, () =>{
    console.log(`app2 server started on port ${PORT}`);
})

recieveMessage()