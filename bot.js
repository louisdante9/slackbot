const Express = require('express')
const bodyParser = require('body-parser')

const app = new Express()
app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT || 80

app.post('/bot', (req, res) => {
 res.send({
    "blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*It's 80 degrees right now.*"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Partly cloudy today and tomorrow"
			}
		}
	]
}
)
});
app.get('*', (req, res) => {
 console.log("This route doesn\'t exist")
});

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`)
})