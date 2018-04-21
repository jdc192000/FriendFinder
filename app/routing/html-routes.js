
var friendsData = require('../data/friends.js');

var path = require('path');

module.exports = function (app) {

	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	app.get("*", function (req, res) {
		// console.log(path.join(__dirname));
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}