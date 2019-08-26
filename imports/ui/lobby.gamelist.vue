<template>
	<transition-group name="slide-list" tag="div" class="game-list">
		<game-list-cell v-for="game in games" v-bind:game="game" v-bind:key="game.public_id"></game-list-cell>
		<div class="row justify-content-end game-list-cell" key="new-game">
			<div class="col col-sm-3">
				<div class="card mt-4">
					<button class="btn btn-success btn-block" v-on:click="createGame">Create New Game</button>
				</div>
			</div>
		</div>
	</transition-group>
</template>
<script>
export default {
	methods: {  
		createGame() {
			console.log('calling Meteor method createGame');
			Meteor.call('createGame');
		}
  },
}
</script>

