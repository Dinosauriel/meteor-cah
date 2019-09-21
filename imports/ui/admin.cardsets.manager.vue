<template>
	<div class="col-sm-6">
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">Cardsets</h5>
				<p class="card-text">Removes all Cardsets from the Database and reimports them from the JSON files:</p>
				<p>
					<code>/private/resources/cards/basekit.json</code>
					<code>/private/resources/cards/customkit.json</code>
				</p>
				<button type="button" class="btn btn-primary" v-on:click="reimportCardsets">Reimport Cardsets</button>
				<p class="card-text"><small class="text-muted">There are {{numberOfCardsets}} cardsets imported</small></p>
			</div>
		</div>
	</div>
</template>
<script>
import '/imports/collections/Cardsets';

export default {
	methods: {
		reimportCardsets() {
			Meteor.call('reimportCardsets');
		}
	},
	meteor: {
		$subscribe: {
			'Cardsets': []
		},
		numberOfCardsets() {
			return Cardsets.find({}).count();
		}
	}
}
</script>