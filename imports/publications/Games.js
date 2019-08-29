Meteor.publish('Games', function () {
	return Games.find({});
});

Meteor.publish('GameById', function(gameid) {
	return Games.findOne({ _id: gameid })
});