
<template>
	<div class="container p-3">
		<div class="p-3">
			<h3>{{lang.END_GAME}}</h3>
		</div>
		<div class="row" >
			<button class="btn btn-danger rounded-pill" @click="vilarejo.lobby()" >Finish</button>
		</div>
	</div>
</template>

<script setup>
	import { inject } from 'vue'
	const lang = inject('lang');
	const vilarejo = inject('vilarejo');
	
</script>

<style scoped></style>

