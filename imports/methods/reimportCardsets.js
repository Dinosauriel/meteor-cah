Meteor.methods({
	reimportCardsets() {
		console.log('reimporting cardsets');
		Cardsets.remove({});

		var json = Assets.getText('resources/cards/basekit.json');
		var obj = JSON.parse(json);

		for (var i = 0; i < obj.cardsets.length; ++i) {
			var cardset = obj.cardsets[i];
			if (cardset.enabled) {
				cardset.white = undefined;
				cardset.black = undefined;
				Cardsets.insert(cardset);
			}
		}
		console.log('imported ' + Cardsets.find({}).count() + ' cardsets.');
	},
});