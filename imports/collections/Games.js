import VR from '/imports/api/vueRoutes.js';

Games = new Mongo.Collection("games");

Games.helpers({
	link() {
		var route = VR.router.resolve({
			name: 'games.play', params: { gameid: this._id }
		});
		return window.location.origin + route.href;
	}
});