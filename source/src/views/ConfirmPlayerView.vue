
<template>
	<div class="container p-3">
		<div class="p-3 text-center">
			<img :src="vilarejo.round.player.picture" :style="'border: 3px solid '+ vilarejo.round.player.color"  class="player-picture" />
			<p class="fs-3" >{{ lang.confirmToContinue( vilarejo.round.player.name ) }}</p>
		</div>
		<div class="row" >
			<button class="btn btn-success rounded-pill" @click="vilarejo.playerAction()" >{{ lang.CONTINUE }}</button>
		</div>
	</div>
</template>

<script setup>
	import { inject } from 'vue'
	const lang = inject('lang');
	const vilarejo = inject('vilarejo');
</script>

<style scoped>
	.player-picture {
		width: 94px;
		height: 94px;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
</style>
