import { Random } from 'meteor/random';

Meteor.methods({
	createGame() {
		var id = Random.id(12);
		while (Games.find({_id: id}).count() > 0) {
			id = Random.id(12);
		}

		console.log('creating new game...');
		Games.insert({_id:id, name: 'a game', points_required: 10})
	},
});