
<template>
	<header class="bg-secondary mt-1 mx-4 p-1 text-white d-flex justify-content-between align-items-center rounded-pill">
		<div class="justify-content-end">
			<button v-if="vilarejo.playing" id="btnQuit" class="btn btn-danger rounded-circle" @click="vilarejo.lobby()">
				<span class="bi bi-x-lg"></span>
			</button>
		</div>
		<h1 class="h4 m-0">Demo</h1>
		<div class="justify-content-end">
			<button class="btn btn-secondary rounded-circle" @click="share">
				<span class="bi bi-share"></span>
			</button>
		</div>
	</header>
</template>

<script setup>
	import { inject } from 'vue';
	
	const vilarejo = inject('vilarejo');
	
	function share() {
		
		if( navigator.canShare ) {
		
			navigator.share({
				title: "Vilarejo",
				text: "Vilarejo",
				url: location.href
			});
			
		} else {
			
			alert("Ops ... Parece que seu navegador não possui suporte para o compartilhamento.");
			
		}
		
	}
</script>