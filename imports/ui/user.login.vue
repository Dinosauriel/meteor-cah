<template>
	<div>
		<logincard></logincard>
		<registercard></registercard>
	</div>
</template>
<script>
import logincard from '/imports/ui/user.login.card.vue';
import registercard from '/imports/ui/user.register.card.vue';

export default {
	methods: {

	},
	components: {
		logincard,
		registercard
	},
	meteor: {
	}
}
</script>

