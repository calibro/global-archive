<script>
	import { getVibrantColor } from '$lib/utils';
	import { onMount } from 'svelte';
	export let url;

	let bgHex;
	// const color = async () => {
	// 		bgHex = await getVibrantColor(url);
	// 	};

	//     color()

	onMount(async () => {
		bgHex = await getVibrantColor(url);
	});
</script>

<div class="w-100 p-3" style={`background-color:${bgHex}`}>
	<slot />
</div>
