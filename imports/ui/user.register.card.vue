<template>
	<div class="card">
			<div class="card-body">
				<h5 class="card-title">Register</h5>
				<p class="card-text">Create a new account.</p>
				<form id="login-form" @submit="submitRegistration">
					<div class="form-group">
						<label for="username">Username</label>
						<input type="text" class="form-control" v-model="username" name="username" required>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" class="form-control" v-model="password" name="password" required>
					</div>
					<div class="form-group">
						<label for="password">Confirm Password</label>
						<input type="password" class="form-control" v-model="confirm_password" name="password" required>
					</div>
					<button class="btn btn-primary">Register</button>
				</form>
			</div>
		</div>
</template>
<script>
export default {
	data: function() {
		return {
			username: "",
			password: "",
			confirm_password: ""
		}
	},
	methods: {
		submitRegistration: function(e) {
			e.preventDefault();
			Accounts.createUser({
				"username": this.username,
				"password": this.password
			});
			if (this.username != this.confirm_password) {

			} else {

			}
		}
	}
};
</script>
