
<template>
	<div class="container p-3">
		<div class="d-flex justify-content-start align-items-center p-1">
			<img :src="vilarejo.round.player.picture" :style="'border: 3px solid '+ vilarejo.round.player.color"  class="player-picture" />
			<span class="p-3">{{ lang.youIs( lang.roles[ role ].name ) }}</span>
		</div>
		<div class="row p-1">{{ lang.roles[ role ].about }}</div>
		<div class="row p-1">{{ lang.roles[ role ].description }}</div>
		<div v-if="Object.keys( vilarejo.round.player.role.actions ).length > 0" class="p-2">
			<h3>Ações</h3>
			
			<ul id="ulActions" class="nav nav-pills mb-3">
				<li v-for="actionName of vilarejo.round.player.role.actions" class="nav-item">
					<button	
						:class="'btn btn'+ (action == actionName? '' : '-outline') +'-warning rounded-pill'" 
						@click="onClickAction( actionName )" >{{ lang.actions[ actionName ] }}</button>
				</li>
			</ul>
			
			<div v-if="options">
				<p>{{ lang.SELECT_TARGET }}</p>
				<div class="d-flex justify-content-start p-2" >
				
					<!-- ul class="list-group w-auto rounded-3 border border-0" style="list-style:none">
						<li v-for="player in options"
							@click="onClickOption( player )"
							:class="'list-group-item bg-transparent text-light p-0 border border-0 rounded-3 '+ (isTarget(player)? 'border-warning':'')" >
							<div class="w-100 text-start text-nowrap">
								<img class="player-picture" :src="player.picture" :style="'border: 3px solid '+ player.color" />
								<span class="d-inline-block text-truncate p-3" style="width:180px;vertical-align: middle;">{{ player.name }}</span>
							</div>
						</li>
					</ul -->
					
					<div class="d-flex rounded-3 border border-0" style="list-style:none">
						<div v-for="player in options"
							@click="onClickOption( player )"
							:class="'list-group-item bg-transparent text-light p-1 rounded-3 border '+ (isTarget(player)? 'border-1 border-warning':'border-0')" >
							<div class="w-100 text-start text-nowrap">
								<img class="player-picture" :src="player.picture" :style="'border: 3px solid '+ player.color" />
								<span class="d-inline-block text-truncate p-3" style="width:180px;vertical-align: middle;">{{ player.name }}</span>
							</div>
						</div>
					</div>
					
				</div>
				<div class="row p-3">
					<button 
						class="btn btn-warning rounded-pill"
						:disabled="selecteds.length==0"
						@click="onClickConfirm()" >{{ lang.CONFIRM }}</button>
				</div>
			</div>
			
		</div>
		<div class="row p-3">
			<button class="btn btn-primary rounded-pill" @click="vilarejo.nextPlayer()" >{{ lang.NEXT }}</button>
		</div>
	</div>
	
</template>

<script setup>
	import { ref, inject } from 'vue'
	//import { createModal } from '../assets/script/vue-utils.mjs'
	//import ActionModal from '../components/ActionModal.vue'
	
	const lang = inject('lang');
	const vilarejo = inject('vilarejo');
	
	const role = ref( vilarejo.value.round.player.role.name );
	const action = ref( null );
	const options = ref( null );
	
	const selecteds = ref([]);
	
	function onClickAction( act ) {
		
		selecteds.value = [];
		
		let players = vilarejo.value.players.filter(e=>e!=vilarejo.value.round.player);
		
		action.value = act;
		options.value = act.options( players );
		
	}
	
	function onClickOption( item ) {
		
		if( selecteds.value.includes(item) ) {
			
			let i = selecteds.value.indexOf( item );
			selecteds.value.splice( i, 1 );
		
		} else {
			
			selecteds.value.push( item );
			
		}
		
	}
	
	function onClickConfirm() {
		
		action.value.execute( vilarejo.value.round.player, ...selecteds.value );
		
		vilarejo.value.nextPlayer();
		
	}
	
	function isTarget( player ) {
		
		return selecteds.value.includes( player );
		
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
