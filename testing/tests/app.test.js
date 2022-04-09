const {sum,makeid}=require("../methods");
const request = require('supertest');
const app=require("../app");

/*
test('testing the sum function of two numbers',function(){
  const output=sum(2,3);
  expect(output).toBe(5);


})

test('testing the random string generator function',function(){
  const output=makeid(10);
  expect( typeof output).toBe("string");
  expect(  output.length).toBe(10);

})
*/


describe('Testing Get Api',function(){


  // This is used for asynchronous testing 
  it("It should return the response 200", (done) => {
    request(app).
        get("/api")
        
        .expect(200) //jest 
       
        .end(function (err, res) {
            if (err) return done(err);
            return done();
        });

});


})


describe('Testing Post Api',function(){


  // This is used for asynchronous testing 
  it("It should return the response 200", (done) => {
    request(app).
        post("/api")
        .send({name: 'john',age:20})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200) //jest 
        .then(response => {
          expect(response.body.message).toBe('Success');
          expect(typeof response.body.data).toBe('object');
          expect(response.body.data.length).toBeGreaterThan(0);
          done();
      }).catch(err => done(err))

});


})