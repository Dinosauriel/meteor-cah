<template>
	<nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand">Cards Against Humanity</span>
        <span class="navbar-text"><span class="badge badge-danger mr-3" v-if="!isConnected">Disconnected</span>{{ username }}</span>
    </nav>
</template>
<script>

</script>
