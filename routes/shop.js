//const path = require("path");
const express = require('express')
const app = express();
const yelp = require('yelp-fusion');

const extractdata = require("../utils/extract");

const apiKey = '90UVSWVkKAqoYTzCcb1uthIw0bgoOiOeapso1V0YJcAgj52ZUBHVsjIlh_oax0j1dTKJ1QTkN0oBaSLSF5RHUnJGvaGcnn90fjC16lVs0p0IXfIPT5dgDbfRDX9mXXYx';

const searchRequest = {
term:'icecream',
location: 'GA'
};

const client = yelp.client(apiKey);

const shopRoutes = express.Router();

shopRoutes.get('/', (req, res, next) => {
let firstResult;
let prettyJson;
var final_response;
client.search(searchRequest).then(response => {
final_response = response;
firstResult = response.jsonBody.businesses;
prettyJson = JSON.stringify(firstResult, null, 4);
final_response = extractdata.topRated(firstResult);
console.log(final_response);
res.render('shop',{"prods":final_response,"title":"Shop"});
}).catch(e => {
console.log(e);
});
});

module.exports = shopRoutes;