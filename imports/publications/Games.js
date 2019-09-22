Meteor.publish('Games', function (args) {
	if (args.length == 0) {
		return Games.find({});
	}
	var gameid = args[0];
	return Games.find({_id: gameid});
});