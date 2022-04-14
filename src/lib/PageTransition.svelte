<script>
	import { fade, fly } from 'svelte/transition';
	export let url = '';
</script>

{#key url}
	<div
		in:fly={{ duration: 200, delay: 200, x: 200, opacity: 1 }}
		out:fly={{ duration: 200, x: -200, opacity: 1 }}
	>
		<slot />
	</div>
{/key}
