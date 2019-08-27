<template>
	<div class="card mt-3 mb-3 game-list-cell">
		<div class="card-body">
			<h5 class="card-title">{{ game.name }}</h5>
			<h6 class="card-subtitle mb-2 text-muted">{{ game.owner_username }}</h6>
			<button v-on:click="joinGame" class="btn btn-primary">Join</button>
			<button v-on:click="deleteGame" class="btn btn-danger">Delete</button>
		</div>
	</div>
</template>
<script>

export default {
	props: {
		game: Object
	},
}
</script>