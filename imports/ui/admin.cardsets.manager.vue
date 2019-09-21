<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">Cardsets</h5>
			<button type="button" class="btn btn-primary" v-on:click="reimportCardsets">Reimport Cardsets</button>
		</div>
		<div class="card-footer text-muted">
			There are {{numberOfCardsets}} Cardsets
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