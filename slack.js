require('dotenv').config();
const { WebClient } = require('@slack/web-api');


// Read a token from the environment variables
const token = process.env.SLACK_TOKEN;

// Initialize
const web = new WebClient(token)

function openModal (trigger_id, view) {
    return web.views.open({
        trigger_id,
        view
    })
}
async function sendMessage(channel, text) {
    return web.chat.postEphemeral({
        channel,
        text
    })
}
module.exports = {openModal, sendMessage}
