const expect = require('chai').expect
const request = require('supertest');
const server = require('../bot');

var app = request.agent(server)

describe('Answers', function () {
    describe('/GET answer', function () {
        it('should GET all the answers', (done) => {
            app
                .get('/answers')
                .end((err, res) => {
                    expect(res.body.answers).to.have.lengthOf(0)
                    expect(res.status).to.eql(200)
                    expect(res.body.answers).to.be.an('array')
                    done();
                });
        })
    })
    describe('/POST quesions', function () {
        it('should respond to the user', (done) => {
            app
                .post('/bot')
                .send({
                  text: 'hello',
                  trigger_id: '55665677'
                })
                .end((err, res) => {
                    expect(res.body.text).to.eql('Welcome. How are you doing?')
                    expect(res.body.text).to.be.a('string')
                    done();
                });
        })
        it('result should return invalid command', function (done) {
            app
            .post('/bot')
            .send({
              text: 'hey',
              trigger_id: '55665677'
            })
            .end((err, res) => {
                expect(res.body.text).to.eql('invalid command')
                expect(res.body.text).to.be.a('string')
                done();
            });
        })
    })
})