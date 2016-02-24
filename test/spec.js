var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');

describe('Routing', function() {
  var url = 'localhost:3000',
    route = '',
    body = {};

  before(function(done) {
    mongoose.connect('mongodb://localhost:27017/blackRedBeLab');                            
    done();
  });

  describe('Root API', function() {
    it('should respond to a root API call', function(done){
      request(url)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200) //Status code
      .end(function(err,res) {
        if (err) {
          throw err;
        }
        res.body.message.should.equal('Hello Black & Red, Inc.');
        done();
      });
    });
  });

  describe('Users Root API', function() {
    route = '/users'

    it('response should return an array of users', function(done){
      request(url)
      .get(route)
      .expect('Content-Type', /json/)
      .expect(200) //Status code
      .end(function(err,res) {
        if (err) {
          throw err;
        }
        res.body.should.have.property('users');
        done();
      });
    });

    it('a user should have props : _id, usrPass, usrEmail', function(done){
      request(url)
      .get(route)
      .expect('Content-Type', /json/)
      .expect(200) //Status code
      .end(function(err,res) {
        if (err) {
          throw err;
        }
        res.body.users[0].should.have.property('_id');
        res.body.users[0].should.have.property('usrPass');
        res.body.users[0].should.have.property('usrEmail');
        done();
      });
    });
  });

  describe('Users Root API', function() {
    route = '/users'

    it('response should return an array of users', function(done){
      request(url)
      .get(route)
      .expect('Content-Type', /json/)
      .expect(200) //Status code
      .end(function(err,res) {
        if (err) {
          throw err;
        }
        res.body.should.have.property('users');
        done();
      });
    });

    it('a user should have props : _id, usrPass, usrEmail', function(done){
      request(url)
      .get(route)
      .expect('Content-Type', /json/)
      .expect(200) //Status code
      .end(function(err,res) {
        if (err) {
          throw err;
        }
        res.body.users[0].should.have.property('_id');
        res.body.users[0].should.have.property('usrPass');
        res.body.users[0].should.have.property('usrEmail');
        done();
      });
    });


    it('should accept a properly formatted POST', function(done){
      body = {
        "email" : "tautologist@record.co.uk",
        "password" : "QBqWksy"
      };
      request(url)
      .post(route)
      .send(body)
      .expect('Content-Type', /json/)
      .expect(200) //Status code
      .end(function(err,res) {
        if (err) {
          throw err;
        }
        done();
      });
    });
  });

  describe('Users/:ID API', function() {
    var route = '/users/56ccd18fdaaa556655c78100'

    it('response should return a specific user', function(done){
      request(url)
      .get(route)
      .expect('Content-Type', /json/)
      .expect(200) //Status code
      .end(function(err,res) {
        if (err) {
          throw err;
        }
        res.body.user.should.have.property('_id');
        res.body.user.should.have.property('usrPass');
        res.body.user.should.have.property('usrEmail');
        done();
      });
    });

    //TODO : Test for Update

    //TODO : Test for Delete

  });

});
