
var friendsData = require('../data/friends.js');
var path = require('path');

console.log("loaded");

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });

    app.post('/api/friends', function (req, res) {

        var bestFriend;
        var currentBest = 100;
        var differenceArray = [];
        var newFriend = [];
        newFriend.push(req.body);

        for (i = 0; i < friendsData.length - 1; i++) {

            for (j = 0; j < 10; j++) {

                var currentDifference = newFriend[0].scores[j] - friendsData[i].scores[j];
                differenceArray.push(Math.abs(currentDifference));
            }
        
            var difference = differenceArray.reduce(function (total, amount) {
                return total + amount
            });

            if (difference < currentBest) {
                bestFriend = friendsData[i];
                currentBest = difference;
                differenceArray = [];
            }

            else {
                differenceArray = [];
            }

        }
        friendsData.push(req.body);
       
        res.json(bestFriend);
    });

}
