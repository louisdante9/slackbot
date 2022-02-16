const Express = require('express')
const bodyParser = require('body-parser')
const { question_one, question_two } = require('./attachment')
const {openModal, sendMessage} = require('./slack')

const app = new Express()
app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT || 8080

app.post('/bot', (req, res) => {
    console.log(req.body, 'hello there')
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
    const {callback_id, state} = payload.view
    if (callback_id === 'question1') {
        const keys = Object.keys(state.values)
        const option = state.values[keys]['static_select-action'].selected_option.text.text
        console.log(option, 'option')
        //save to db
        openModal(triggerId, question_two)
        return res.send({text: 'What are your favorite hobbies'})
    }
    // return res.send({text: 'invalid action call'})
    // return sendMessage('', 'invalid action call')

})
app.get('*', (req, res) => {
 console.log("This route doesn\'t exist")
});

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`)
})