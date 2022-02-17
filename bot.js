const Express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
require('dotenv').config()
const config = require('./config');
const { question_one, question_two } = require('./attachment')
const { openModal, sendMessage, updateModal } = require('./slack')
const { createResponse, udpdateResponse, getAllresponses } = require('./controller')
const {filterKeys} = require('./util')

const app = new Express()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 80;
const options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(config.dbUrl, options, (err) => {
    if (err) console.log(err);
});


app.post('/bot', (req, res) => {
    const triggerId = req.body.trigger_id
    if (req.body.text.toLowerCase() === 'hello') {
        openModal(triggerId, question_one)
        return res.send({ text: 'Welcome. How are you doing?' })
    }
    return res.send({ text: 'invalid command' })

});
app.post('/action', async (req, res) => {
    const payload = JSON.parse(req.body.payload)
    const { id: userId, username } = payload.user
    const { callback_id, state, id, hash, blocks, root_view_id } = payload.view
    if (callback_id === 'question1') {
        const option = filterKeys(payload, state)
        await createResponse(option, blocks, root_view_id, username)
        res.status(200).send()
        updateModal(id, question_two, hash)
        return
    }
    if (callback_id === 'question2' && payload.type === 'view_submission') {
        const option = filterKeys(payload, state)
        await udpdateResponse(option, blocks, root_view_id)
        res.status(200).send({ "response_action": "clear" })
        sendMessage(userId, 'Thank you')
        return
    }
    return
})
app.get('/answers', async(req, res)=> {
    await getAllresponses(req, res);
})
app.get('*', (req, res) => {
    console.log("This route doesn\'t exist")
});

app.listen(port, err => {
    if (err) {
        throw new Error(err.message);
    }
    console.log(`Server started at localhost:${port}`)
});

module.exports = app
