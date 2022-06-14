const chai = require('chai')
const chaiHttp = require('chai-http')

const {describe, it} = require('mocha');
const app = require('../../app').app

chai.use(chaiHttp)

describe('Suite de testing de integracion para AUTH', () => {
    it('Should return 401 when no jwt available', (done) => {
        chai.request(app)
            .get('/api/v1/post')
            .end((err, res) => {
                chai.assert.equal(res.status, 401)
                done()
            })
    })
    it('Should return 400 when no data id provided', (done) => {
        chai.request(app)
            .post('/api/v1/auth/login')
    })
})


