Meteor.methods({
	reimportCardsets() {
		console.log('reimporting cardsets');
		Cardsets.remove({});

		var json = Assets.getText('resources/cards/basekit.json');
		var obj = JSON.parse(json);

		for (cardset in obj.cardsets) {
			Cardsets.insert(cardset);
		}
		console.log('imported ' + Cardsets.find({}).count() + ' cardsets.');
	},
});