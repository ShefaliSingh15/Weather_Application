var chai = require('chai');
var assert = require('chai').assert;
var app = require('../app');
var supertest = require('supertest');
var url = supertest('localhost:1504');
var sinon = require('sinon');
var model = require('../model/schema');
var expect = chai.expect;
var should = chai.should();

describe('index',function(){
	beforeEach(()=>
	{
		let modelStub = sinon.stub(model,'find');
modelStub.yields(null, [{name: 'preeti', age: 21, course: 'btech'}])

	});
it('check get', function(done) {
  url
    .get('/')
    .expect(200)
    .expect('Content-Type',/json/)
    .end(function(err, res){
    	if(err){
    		console.log(err);
    		done(err);
    	}
    	else{
    		//console.log(res);
    		assert.equal(res.body[0].name,'preeti');
    		done();
    	}
	
    });
});
});

describe('post/ saveUsers', function() {
	beforeEach(()=>
	{
		let modelStu = sinon.stub(model.prototype,'save');
modelStu.yields(null, [{name: "komal", age: 21, course: "btech"}])

	});

            it('checking post',function(done) {
                 url
                    .post('/saveUsers')
                    .send({name: "", age: 21, course: "btech"})
                    .expect(200)
                    .expect('Content-Type', /json/)
                    .end(function(err, res) { 
                    if (err) return done(err);                       
                        res.body[0].should.have.property('name','komal');
                        res.body[0].should.have.property('age',21);
                        res.body[0].should.have.property('course','btech');
                       
                         done();
            });
        });
    });
describe('put/ update',function(){
	beforeEach(()=>{
			let StubUpdate=sinon.stub(model.prototype,'update');

			StubUpdate.withArgs({name:"shaifali"},{$set:{course:'mba'}}).yields(null,{ok:1, nModified:0, n:0})
		
	});

	it('check put',function(done){
		url
		   .put('/update/shaifali')
		   .expect(200)
		   .expect('Content-Type',/json/)
           .send({$set:{course:'mba'}})
		   .end(function(err,res){
		   	if(err) return done(err);
		   	            else{
                               //console.log(res.body.ok);
                              expect(res.body.ok).to.equal(1)
                              expect(res.body.nModified).to.equal(0)
                              expect(res.body.n).to.equal(0)
                               /*assert.equal(res.body.nModified, 0);
                               assert.equal(res.body.n, 0);*/
                              done();
                           }
                       
		   })
		})
})


describe(' delete',function(){
    beforeEach(()=>{
            let StubDelete=sinon.stub(model.prototype,'remove');

            StubDelete.withArgs({name:"shaifali"}).yields(null,{ok:1, n:0})
        
    });

    it('check put',function(done){
        url
           .delete('/delete/shaifali')
           .expect(200)
           .expect('Content-Type',/json/)
           .send({name:"shaifali"})
           .end(function(err,res){
               if(err) return done(err);
                           else{
                               console.log(res.body);
                              expect(res.body.ok).to.equal(1)
                              expect(res.body.n).to.equal(0)
                               /*assert.equal(res.body.nModified, 0);
                               assert.equal(res.body.n, 0);*/
                              done();
                           }
                       
           })
        })
})