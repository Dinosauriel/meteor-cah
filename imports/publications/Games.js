Meteor.publish('Games', function () {
	return Games.find({});
});