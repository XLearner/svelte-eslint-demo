<script lang="ts">
	import Test from './test.svelte'
	export let name: string;
	export let age;
	function click() {
		console.log('test123')
	}
	export const test = 123
</script>

<main>
	<Test on:message={click} />
	<h1>Hello {name}!</h1>
	<button on:click={click}>this is {age}</button>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>