<template>
	<nav class="navbar navbar-dark bg-dark mb-3">
        <span class="navbar-brand">Cards Against Humanity</span>
        <span class="navbar-text"><span class="badge badge-danger mr-3" v-if="!isConnected">Disconnected</span>{{ username }}</span>
    </nav>
</template>
<script>

export default {
    meteor: {
        isConnected: function () {
            return Meteor.status().connected;
        }
	}
}
</script>
