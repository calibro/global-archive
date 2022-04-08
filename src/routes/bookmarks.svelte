<script>
	import CSVDownloader from '$lib/CSVDownloader.svelte';
	import { bookmarks } from '$lib/stores';
	import RecordCard from '$lib/RecordCard/index.svelte';

	$: records = $bookmarks ? $bookmarks : [];
</script>

<div class="container">
	<div class="row">
		{#each records as record (record.id)}
			<div class="col-3 my-2">
				<RecordCard {record} />
			</div>
		{/each}
	</div>
	<div class="row">
		<CSVDownloader data={records} filename={'global-archive-list.csv'}>Export list</CSVDownloader>
	</div>
</div>
