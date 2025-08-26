
<template>
	<div class="container p-3">
		<div class="p-3">
			<h3>{{ vilarejo.notice.title }}</h3>
			<p v-for="message of messages">{{ message }}</p>
		</div>
		<div class="row" >
			<button class="btn btn-primary rounded-pill" @click="vilarejo.createRound()" >{{lang.CONTINUE}}</button>
		</div>
	</div>
</template>

<script setup>
	import { ref, inject } from 'vue'
	
	const vilarejo = inject('vilarejo');
	const lang = inject('lang');
	
	const messages = ref([]);
	
	for( let player of vilarejo.value.players ) {
		
		let m = player.role.message;
		
		if( m ) {
			if( typeof lang.value[m] == 'function' ) {
				
				messages.value.push( lang.value[ m ].call(null, lang.value.roles[ player.role.name ].name ) );
				
			} else {
				
				messages.value.push( lang.value[ m ] );
				
			}
		}
		
	}
	
</script>

<style scoped></style>

