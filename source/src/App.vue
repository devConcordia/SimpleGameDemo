
<template>
	<div class="d-flex flex-column justify-content-between h-100">
		<AppHeader />
		<main class="overflow-y-auto">
			<component :is="vilarejo.view" />
		</main>
		<div class="container p-3 text-center">
			<p>Powered by <a href="https://github.com/devConcorida" ><i class="bi bi-github"></i> devConcorida</a></p>
		</div>
	</div>
</template>

<script setup>
	import { ref, provide } from 'vue'
	///
	import Vilarejo from './Vilarejo.mjs'
	import languages from './assets/script/languages.mjs'
	import AppHeader from './components/AppHeader.vue'
	
	///
	const lang = ref( languages.PT_BR );
	provide('lang', lang);
	
	///
	const vilarejo = ref( Vilarejo.Load() );
	provide('vilarejo', vilarejo);
	vilarejo.value.lobby();
	vilarejo.value.lang = lang;
</script>

<style scoped></style>
