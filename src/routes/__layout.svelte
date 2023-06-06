<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/Navbar/index.svelte';
	import '../app.scss';
</script>

{#if $page.routeId}
	<Navbar />
{/if}

<slot />
