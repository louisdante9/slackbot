const { Schema, model } = require('mongoose');
const timestampPlugin = require('./plugin/timestamp');

const answerSchema = new Schema({
  questionId: { type: String, required: true },
  username: { type: String, required: true },
  question_one: { type: String, required: true },
  answer_one: { type: String, required: true },
  question_two: { type: String, default: '' },
  answer_two: { type: String, default: '' },
});
answerSchema.plugin(timestampPlugin);
module.exports = model('Answer', answerSchema);