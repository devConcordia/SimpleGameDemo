
<template>
	<div class="container p-2 pt-5">
		<div class="text-center" >
			<div v-if="vilarejo.players.length > 0" class="row" >
				<div class="col p-2" >
					<button class="btn btn-success rounded-pill" @click="vilarejo.startGame()" >{{ lang.START_GAME }}</button>
					<PlayersList />
				</div>
			</div>
			<div class="row" >
				<div class="col p-2" >
					<button class="btn btn-primary rounded-pill" @click="vilarejo.newPlayers()">{{ lang.NEW_PLAYERS }}</button>
				</div>
			</div>
			<div class="row" >
				<div class="col p-2" >
					<button class="btn btn-warning rounded-pill" @click="">{{ lang.SETTINGS }}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { inject } from 'vue';

	import PlayersList from '../components/PlayersList.vue';
	
	const lang = inject('lang');
	const vilarejo = inject('vilarejo');
</script>

<style scoped></style>
