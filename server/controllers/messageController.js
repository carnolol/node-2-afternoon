const messages = []
let id = 0

module.exports = {
            //CREATE
    createMessage: (req,res) => { 
        // console.log('testing create message')
        // console.log(req.body)
        const {text, time} = req.body
        const newMessage = {
            id,
            text,
            time
        }
        messages.push(newMessage)
        id++
        res.status(200).send(messages)
    },
                //READ
    readAllMessages:(req,res) => { 
        res.status(200).send(messages)
    },
            //UPDATE
    updateMessages:(req,res) => { 
        console.log('Check to UPDATE MESAGE')
        console.log(req.body)
        const {text} = req.body
        let {id} = req.params
        const index = messages.findIndex(message => message.id === +id)
        if(index === -1){
            return res.status(404).send('NO MESSAGES HERE')
        }
        messages[index] = {...messages[index], text}
        res.status(200).send(messages)
    },
                //DELETE
    deleteMessage: (req,res) => { 
        let {id} = req.params
        const index = messages.findIndex(message => message.id === +id)
        if(index === -1){
            return res.status(404).send('THIS IS NOT THE MESSAGE YOU ARE LOOKING FOR')
        }
        messages.splice(index, 1)
        res.status(200).send(messages)
    }
}