<template>
	<div class="card">
			<div class="card-body">
				<h5 class="card-title">Login</h5>
				<p class="card-text">Log In to start creating games</p>
				<form id="register-form" @submit="submitLogin">
					<div class="form-group">
						<label for="username">Username</label>
						<input type="text" class="form-control" v-model="username" name="username" required>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" class="form-control" v-model="password" name="password" required>
					</div>
					<button class="btn btn-primary">Login</button>
				</form>
			</div>
		</div>
</template>
<script>
export default {
	data: function() {
		return {
			username: "",
			password: ""
		}
	},
	methods: {
		submitLogin: function(e) {
			e.preventDefault();
			Meteor.loginWithPassword(this.username, this.password);
		}
	}
};
</script>
