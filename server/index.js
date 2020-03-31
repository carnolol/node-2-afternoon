const PORT = 3001
const express = require('express')
const app = express()
app.use(express.json())
const messageController = require('./controllers/messageController')
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', messageController.createMessage)
app.get('/api/messages', messageController.readAllMessages)
app.put('/api/messages/:id', messageController.updateMessages)
app.delete('/api/messages/:id', messageController.deleteMessage)


app.listen(PORT, () => console.log(`WE HAVE ARRIVED AT PORT ${PORT}`))