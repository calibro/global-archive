<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	let w, h;
	const width = writable(0);
	const height = writable(0);

	$: width.set(w);
	$: height.set(h);
	$: context = {
		width: width,
		height: height
	};
	$: setContext('responsive', context);
</script>

<div bind:clientWidth={w} bind:clientHeight={h} class="w-100 h-100">
	{#if $width}
		<slot />
	{/if}
</div>
