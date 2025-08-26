
<template>
	<div class="d-flex justify-content-center p-2" >
		<ul class="list-group w-auto rounded-3 border border-dark-subtle" style="list-style:none">
			<li class="list-group-item bg-transparent p-0 border border-0 rounded-3" v-for="item in vilarejo.players" :id="'li-'+ item.id" >
				<div class="d-flex p-2 justify-content-between align-items-center text-light" >
					<div class="w-100 text-start text-nowrap">
						<img class="player-picture" :src="item.picture" :style="'border: 3px solid '+ item.color" />
						<span class="d-inline-block text-truncate p-3" style="width:180px;vertical-align: middle;">{{ item.name }}</span>
					</div>
					<button class="btn bg-transparent text-danger" @click="removePlayer( item.id )">
						<i class="bi bi-trash3-fill" ></i>
					</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { inject } from 'vue'
	
	const vilarejo = inject("vilarejo");
	
	function removePlayer( id ) {
		
		const li = document.getElementById('li-'+ id);
		
		if( li ) {
			
			li.remove();
		
			vilarejo.value.removePlayer( id );
			
		}
		
	}
</script>

<style scoped>
	.player-picture {
		width: 48px;
		height: 48px;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
</style>

