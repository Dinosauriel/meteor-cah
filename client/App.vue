<template>
	<div>
		<header>
			<navbar></navbar>
		</header>
		<router-view></router-view>
	</div>
</template>
<script>
import navbar from '/imports/ui/main.navbar.vue';
export default {
  components: {
	  navbar
  }
}
</script>