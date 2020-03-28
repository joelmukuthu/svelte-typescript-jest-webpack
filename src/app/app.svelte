<script lang="typescript">
	import Button from '@local/button';
	// import Button from '../button/button.svelte';

	export let name: string;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>

<Button name='Button!' />
