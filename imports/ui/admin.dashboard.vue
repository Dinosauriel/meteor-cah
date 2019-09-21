<template>
	<div class="admin-dashboard">
		<h1>Admin Dashboard</h1>
		<cardsetsmanager></cardsetsmanager>
	</div>
</template>
<script>
import cardsetsmanager from '/imports/ui/admin.cardsets.manager.vue';

export default {
	components: {
		cardsetsmanager
	},
	watch: {
	},
	methods: {
	},
	meteor: {
		$subscribe: {

		},
	}
}
</script>
