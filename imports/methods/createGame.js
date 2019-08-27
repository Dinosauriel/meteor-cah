Meteor.methods({
	createGame() {
		console.log('creating new game...');
		Games.insert({name: 'a game', public_id:'mypubid'})
	},
});