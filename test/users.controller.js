import chai from 'chai';
import request from 'supertest';
import Server from '../server';

const expect = chai.expect;

describe('Users', () => {
  it('should get all users', () =>
    request(Server)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('array')
          .of.length(2);
      }));

  it('should add a new user', () =>
    request(Server)
      .put('/api/v1/users')
      .send({
        email: 'mindx@gmail.com',
        name: 'Nam Nguyen'
     })
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an('object')
          .that.has.property('name')
          .equal('Nam Nguyen');
      }));

  it('should get an example by id', () =>
    request(Server)
      .get('/api/v1/users/1')
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name')
          .equal('Nam Nguyen');
      }));
});
