const Answer = require('../models/response')

const createResponse = async(option, blocks, questionId, username) => {
    const instance = new Answer({
        questionId, 
        username, 
        question_one: blocks[0].text.text,
        answer_one: option
    })
    return await instance.save();
}
const udpdateResponse = async ( option, blocks, questionId) => {
    return await Answer.findOneAndUpdate({ questionId }, {
        $set: {
            question_two: blocks[0].text.text,
            answer_two: option
        }
    }, {
        new: true,
    });
}
const getAllresponses = async (req, res) => {
    console.log(req.body, 'reques')
    try {    
        const answers = await Answer.find();
        return res.status(200).json({
          message: 'answers fetched successfully',
          answers,
        });
      } catch (error) {
        return res.status(500).send({ error: 'something went wrong' });
      }
}
module.exports = {createResponse, udpdateResponse, getAllresponses}