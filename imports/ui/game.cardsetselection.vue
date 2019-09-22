<template>
	<div class="card form-group">
		<div class="card-body">
			<h5 class="card-title">Cardsets</h5>
			<div v-for="cardset in cardsets" v-bind:key="cardset._id" class="form-check form-check-inline">
				<input type="checkbox" class="form-check-input" :id="'cardset_' + cardset._id" :value="'cardset_' + cardset.id">
				<label class="form-check-label" :for="'cardset_' + cardset.id">{{ cardset.name }}</label>
			</div>
		</div>
	</div>		
</template>
<script>
import '/imports/collections/Games';
import '/imports/collections/Cardsets';

export default {
	meteor: {
		$subscribe: {
			'Cardsets': []
		},
		cardsets: function() {
			return Cardsets.find({});
		}
	}
}
</script>