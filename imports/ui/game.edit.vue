<template>
	<div class="edit-game">
		<div class="row mt-3">
			<div class="col col-sm-8">
				<form method="POST" action="">
					<div class="form-group">
						<label for="game_name">Name</label>
						<input type="text" class="form-control" id="game_name" name="game_name" :value="game.name" required>
					</div>
					<div class="form-group">
						<label for="game_points">Points</label>
						<input type="number" class="form-control" id="game_points_required"
							aria-describedby="game_points_help" :value="game.points_required" min="1" max="64" name="game_points_required" required>
						<small id="game_points_help" class="form-text text-muted">How many points are required to win?</small>
					</div>
					<cardsetselection></cardsetselection>
					<button type="submit" class="btn btn-primary">Start Game</button>
				</form>
			</div>

			<div class="col col-sm-4">
				<invitelink v-bind:invitelink="game.link()"></invitelink>

				<div class="card mt-3">
					<div class="card-header">
						Players
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">
							Cras justo odio
							<button type="button" class="btn btn-primary btn-sm float-right">Kick</button>
						</li>
					</ul>
				</div>

				<a class="btn btn-danger btn-block mt-3" href="">Delete Game</a>
			</div>
		</div>
	</div>
</template>
<script>
import cardsetselection from '/imports/ui/game.cardsetselection.vue';
import invitelink from '/imports/ui/game.invitelink.vue';
import '/imports/collections/Games';

export default {
	components: {
		cardsetselection,
		invitelink
	},
	watch: {
		$route: function(to, from) {
			console.log("route game id changed from " + from + " to " + to);
		}
	},
	computed: {
		gameId: function() {
			return this.$route.params.gameid;
		}
	},
	created: function() {
		Meteor.subscribe('Games', [this.gameId]);
	},
	meteor: {
		game() {
			console.log(this.gameId);
			console.log(Games.find({}).fetch());
			return Games.findOne({_id: this.gameId});
		}
	}
}
</script>
