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

function updateModal(view_id, view, hash) {
    return web.views.update({
        view_id,
        view,
        hash
    })
}
async function sendMessage(channel, text) {
    return web.chat.postMessage({
        channel,
        text
    })
}

function closeModal() {
    // return web.views.
}
module.exports = {openModal, sendMessage, updateModal}
