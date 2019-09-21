<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">Cardsets</h5>
			<button type="button" class="btn btn-primary" v-on:click="reimportCardsets">Reimport Cardsets</button>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		reimportCardsets() {
			Meteor.call('reimportCardsets');
		}
	},
}
</script>