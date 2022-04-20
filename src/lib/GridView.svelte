<script>
	import RecordCard from '$lib/RecordCard/index.svelte';
	export let records = [];
</script>

{#each records as record (record.id)}
	<div class="col-12 col-md-3 my-2">
		<RecordCard {record} />
	</div>
{/each}
