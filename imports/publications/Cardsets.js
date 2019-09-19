Meteor.publish('Cardsets', function () {
	return Cardsets.find({});
});