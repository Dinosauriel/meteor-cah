<template>
	<div class="card mt-3 mb-3 game-list-cell">
		<div class="card-body">
			<h5 class="card-title">{{ game.name }}</h5>
			<h6 class="card-subtitle mb-2 text-muted">{{ game._id }}</h6>
			<button v-on:click="joinGame" class="btn btn-primary">Join</button>
			<button v-on:click="editGame" class="btn btn-primary">Edit</button>
			<button v-on:click="deleteGame" class="btn btn-danger">Delete</button>
		</div>
	</div>
</template>
<script>

export default {
	props: {
		game: Object
	},
	methods: {
		joinGame() {
			this.$router.push({ name: 'games.play', params: { gameid: this.game._id } })
		},
		editGame() {
			this.$router.push({ name: 'games.edit', params: { gameid: this.game._id } })
		},
		deleteGame() {
			console.log('calling Meteor method deleteGame(' + this.game._id + ')');
			Meteor.call('deleteGame', [this.game._id]);
		}
	}
}
</script>