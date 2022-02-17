# slackbot
slackbot

This is a basic open source version for [Slack](https://api.slack.com).

Functionality based on Simple question, answer model, but you can self host it, to have unlimited questions and choices.

## Example Usage


### Server

- Grab a server and install `npm` and `node`
- Grab a mysql database
- `npm i`
- Feed it some environment variables (either on the machine or in `.env` file)

```
SLACK_SIGNING_SECRET=xxxx
SLACK_TOKEN=xxxx
DB_URL=xxxx
TEST_DB_URL=xxxx
```

- Start it up and save it as a startup process with `npm start/dev` if you want
- Tunnel the requests from `8080` to `ngrok`

### Slack app
- Create a `Slash command` feature
  - The `command` can be anything, like `/bot`
  - The `Request URL` should be `http://yourserver.com/bot`
  - `Description` can be anything, like `Bot`
  - `Usage hint` should be `Hello`

  - Activate the `Interactive Components` feature
  - The `Request URL` should be `http://yourserver.com/action`

  - At the `OAuth & Permissions` feature select the scope `users.profile:read` (so the app can get the profile pictures for voters)
- Install it to your workspace
  - Grab the `OAuth Access Token` and the `Verification Token` and register the created app at `http://yourserver.com/auth/callback`

  ## Contributing

Feel free to create a PR or fork the repo.