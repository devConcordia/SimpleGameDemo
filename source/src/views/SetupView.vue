
<template>
	<div class="container p-2 pt-3">
		<div class="row p-2 justify-content-center" >
			<div class="text-center">
				<label for="inPicture">
					<img id="imgPicture" src="../assets/image/user.png" class="player-picture" />
					<p class="text-center text-light">Click to select a picture</p>
				</label>
				<input type="file" class="form-control d-none" id="inPicture" accept="image/*" @change="getPicture()">
			</div>
			<div class="input-group w-75">
				<span class="input-group-text" >Name</span>
				<input type="text" id="inName" class="form-control bg-dark text-light" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
			</div>
		</div>
		
		<div class="row p-2" >
			<p class="fst-italic text-end"></p>
		</div>
		
		<div class="row p-2 text-center" >
			<div class="col p-2">
				<button class="btn btn-success rounded-pill" @click="addPlayer()" >Add Player</button>
			</div>
		</div>
		<div class="row p-2 text-center" >
			<div class="col p-2">
				<button class="btn btn-danger rounded-pill" @click="vilarejo.startGame()" >
					Start Game: <span class="fst-italic">{{ vilarejo.players.length }} players</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, inject } from 'vue'
	import default_picture from '../assets/image/user.png'

	const vilarejo = inject('vilarejo');
	
	function addPlayer() {
		
		const imgPicture = document.getElementById('imgPicture');
		const inName = document.getElementById('inName');
		
		vilarejo.value.addPlayer( inName.value, imgPicture.src );
		
		inName.value = '';
		imgPicture.src = default_picture;
		
	}
	
	function getPicture() {
		
		const imgPicture = document.getElementById('imgPicture');
		const inPicture = document.getElementById('inPicture');
		
		if( inPicture.files.length > 0 ) {
			
			const reader = new FileReader();
			
			reader.onload = function () {
				
				imgPicture.onload = function() {
					imgPicture.onload = null;
					resizeImage( imgPicture );
				};
				imgPicture.src = reader.result;
				
				
			};
			
			reader.readAsDataURL( inPicture.files[0] );
			
		}
		
	}
	
	function resizeImage( image ) {
		
		const nw = 150;
		const nh = Math.ceil( ( image.naturalHeight/image.naturalWidth)* nw );
		
		const canvas = document.createElement('canvas');
		canvas.width = nw;
		canvas.height = nh;
		
		const ctx = canvas.getContext('2d');
		//ctx.fillStyle = "#000";
		//ctx.fillRect( 0, 0, nw, nh );
		ctx.drawImage( image, 0, 0, nw, nh );
		
		image.src = canvas.toDataURL();
		
	}
	
</script>


<style scoped>
	.player-picture {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 50%;
		border: 4px solid #fff;
		box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
</style>
