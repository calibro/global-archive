<script>
	import { getVibrantColor } from '$lib/utils';
	import { onMount } from 'svelte';
	export let url;

	let bgHex;

	onMount(async () => {
		bgHex = await getVibrantColor(url);
	});
</script>

<div
	class="bg w-100 p-3 d-flex aligh-items-center justify-content-center"
	style={`background-color:${bgHex}`}
>
	<slot />
</div>

<style>
	.bg {
		background-color: white;
		transition: background-color 0.5s;
	}
</style>
