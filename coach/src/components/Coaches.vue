<template>
	<div class="container">
		<div class="title">
			<h5>Coaches</h5>
		</div>
		<div class="content">
			<coach-card/>

		</div>
	</div>
</template>
<script>
import CoachCard from './CoachCard.vue'
export default {
	components: {
		CoachCard
	}
	
}
</script>
<style scoped>
.container{
	border: 1px solid black;
	border-radius: 20px;
}
.title {
	display:flex;
	justify-content: center;
}
</style>