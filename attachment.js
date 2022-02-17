exports.question_one = {
	"title": {
		"type": "plain_text",
		"text": "slackbot"
	},
    "callback_id": "question1",
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Welcome, how are you doing?"
			},
			"accessory": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Doing Well",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Neutral",
							"emoji": true
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Feeling Lucky",
							"emoji": true
						},
						"value": "value-2"
					}
				],
				"action_id": "static_select-action"
			}
		}
	],
	"type": "modal"
}

exports.question_two = {
	"title": {
		"type": "plain_text",
		"text": "slackbot"
	},
	"submit": {
		"type": "plain_text",
		"text": "Submit"
	},
    "callback_id": "question2",
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "What are your favorite hobbies"
			},
			"accessory": {
				"type": "multi_static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select options",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Football",
							"emoji": true
						},
						"value": "value-0"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Music",
							"emoji": true
						},
						"value": "value-1"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Sleep",
							"emoji": true
						},
						"value": "value-2"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Movies",
							"emoji": true
						},
						"value": "value-3"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Basketball",
							"emoji": true
						},
						"value": "value-4"
					}
				],
				"action_id": "multi_static_select-action"
			}
		}
	],
	"type": "modal"
}