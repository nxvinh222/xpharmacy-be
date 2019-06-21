import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Athenticate', () => {
  it('Login success', () =>
    request(Server)
      .post('/api/v1/login')
      .send({ 
        username: 'mindx',
        password: '123a'
     })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('username')
          .equal('mindx');
      }));

  it('Sign up success', () =>
    request(Server)
      .post('/api/v1/signup')
      .send({
        username: 'mindx',
        password: '123a',
        email: 'mindx@gmail.com',
        name: 'Nam Nguyen'
      })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name')
          .equal('Nam Nguyen');
      }));
});
