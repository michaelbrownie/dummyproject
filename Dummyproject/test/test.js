var expect = require("chai").expect;
var request = require('request');
var server = require('../app/main.js');

describe("User API tests", function() {
	before(function() {
		server.listen(8081);
	})

	after(function() {
		server.close();
	})

	describe ("Get at '/' should return 200 and contain 'Hello World'", function() {
		var url = "http://localhost:8081"
		
		it("returns status 200", function(done) {
			request.get(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it("returns Hello World", function(done) {
			request.get(url, function(error, response, body) {
				expect(body).to.equal("Hello World!");
				done();
			});
		});
	});

	describe ("GET at '/notSoHelloWorld' should return 200 and 'Fine, have it your way.'", function() {
		var url = "http://localhost:8081/notSoHelloWorld"
		it("returns status 200", function(done) {
			request(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it("returns 'Fine, have it your way.'", function(done) {
			request(url, function(error, response, body) {
				expect(body).to.equal("Fine, have it your way.");
				done();
			});
		});
	});

	describe ("POST at '/' should return 200 and get 'Hello", function() {
		var url = "http://localhost:8081"
		
		it("returns status 200", function(done) {
			request.post(url, function(error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			});
		});

		it("returns Hello POST during POST", function(done) {
			request.post(url, function(error, response, body) {
				expect(body).to.equal('Hello POST');
				done();
			});
		});
	});
});
