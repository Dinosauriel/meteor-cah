<template>
	<div class="admin-dashboard">
		<h1>Admin Dashboard</h1>
		<div class="card">
			<div class="card-body">
				<h5 class="card-title">Cardsets</h5>
				<button type="button" class="btn btn-primary" v-on:click="reimportCardsets">Reimport Cardsets</button>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	components: {
	},
	watch: {
	},
	methods: {
		reimportCardsets() {
			Meteor.call('reimportCardsets');
		}
	},
	meteor: {
		$subscribe: {

		},
	}
}
</script>
