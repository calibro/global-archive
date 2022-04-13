<script>
	import { base } from '$app/paths';
	import CSVDownloader from '$lib/CSVDownloader.svelte';
	import { bookmarks } from '$lib/stores';
	import RecordCard from '$lib/RecordCard/index.svelte';

	$: records = $bookmarks ? $bookmarks : [];
</script>

<div class="container">
	{#if records.length}
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
	{:else}
		<div class="row my-5">
			<div class="col-12">
				<h6 class="text-center">No collections bookmarked!</h6>
				<p class="text-center">Go to <a href={`${base}/explore`}>explore</a> section</p>
			</div>
		</div>
	{/if}
</div>
