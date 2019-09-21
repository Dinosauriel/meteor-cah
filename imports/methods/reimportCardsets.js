Meteor.methods({
	reimportCardsets() {
		console.log('reimporting cardsets');
		Cardsets.remove({});

		var basekit = Assets.getText('resources/cards/basekit.json');
		var customkit = Assets.getText('resources/cards/customkit.json');

		var basecardsets = JSON.parse(basekit).cardsets;
		var customcardsets = JSON.parse(customkit).cardsets;

		cardsets = basecardsets.concat(customcardsets);

		for (var i = 0; i < cardsets.length; ++i) {
			var cardset = cardsets[i];
			if (cardset.enabled) {
				cardset.white = undefined;
				cardset.black = undefined;
				Cardsets.insert(cardset);
			}
		}
		console.log('imported ' + Cardsets.find({}).count() + ' cardsets.');
	},
});