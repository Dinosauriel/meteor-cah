Meteor.methods({
	deleteGame(gameId) {
		console.log('deleting game with id ' + gameId[0] + '...');
		Games.remove({_id:gameId[0]});
		console.log(Games.find().count());
	},
});