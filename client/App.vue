<template>
	<div>
		<header>
			<navbar></navbar>
		</header>
		<div class="container mb-5">
			<router-view></router-view>
		</div>
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