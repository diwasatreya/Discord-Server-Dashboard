const { Router } = require('express');
const fetch = require('node-fetch')
var axios = require("axios");
const CheckAuth = require('../middlewares/CheckAuth');
module.exports.Router = class Chatbot extends Router {
	constructor() {
		super();

this.get('/',  function (req, res) {
res.send("Welcome to API")
});    
	}
};

module.exports.name = '/api';
