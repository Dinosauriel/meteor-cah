<template>
	<div class="card">
			<div class="card-body">
				<h5 class="card-title">Register</h5>
				<p class="card-text">Create a new account.</p>
				<form id="login-form" :action="action" method="POST">
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
					<button v-on:click="submitRegistration" class="btn btn-primary">Register</button>
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
		submitRegistration: function() {

		}
	}
};
</script>
