<script>
	import Resource from '$lib/Resource.svelte';
	import { page } from '$app/stores';
</script>

<Resource id={$page.params.id} />
