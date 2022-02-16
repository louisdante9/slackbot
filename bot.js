const Express = require('express')
const bodyParser = require('body-parser')
const { question_one, question_two } = require('./attachment')
const {openModal, sendMessage, updateModal} = require('./slack')

const app = new Express()
app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT || 8080

app.post('/bot', (req, res) => {
    const triggerId = req.body.trigger_id
    
    if (req.body.text.toLowerCase() === 'hello') {
        openModal(triggerId, question_one)
        return res.send({text: 'Welcome. How are you doing?'})
    }

    return res.send({text: 'invalid command'})

});
app.post('/action', (req, res) => {
    const payload = JSON.parse(req.body.payload)
    const triggerId = payload.trigger_id;
    const { id: userId } = payload.user
    const {callback_id, state, id, hash} = payload.view
    console.log(payload.type, 'type');
    // res.status(200).send()
    if (callback_id === 'question1') {
        const keys = Object.keys(state.values)
        const option = state.values[keys]['static_select-action'].selected_option.text.text
        //save to db
        res.status(200).send()
         updateModal(id, question_two, hash)
         return 
        // return res.send({text: 'What are your favorite hobbies'})
    }
    if (callback_id === 'question2' && payload.type === 'view_submission') {
        
        res.status(200).send({ "response_action": "clear" })
        sendMessage(userId, 'Thank you')
        return 
        
    }
    return 

})
app.get('*', (req, res) => {
 console.log("This route doesn\'t exist")
});

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`)
})