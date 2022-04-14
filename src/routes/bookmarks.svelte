<script>
	import { base } from '$app/paths';
	import CSVDownloader from '$lib/CSVDownloader.svelte';
	import { bookmarks } from '$lib/stores';
	import ListView from '$lib/ListView.svelte';

	$: records = $bookmarks ? $bookmarks : [];
</script>

<div class="container">
	{#if records.length}
		<div class="row mt-3">
			<ListView {records} />
		</div>
		<div class="row">
			<div class="col-auto ms-auto">
				<CSVDownloader type="button" data={records} filename={'global-archive-list.csv'}
					>Export list</CSVDownloader
				>
			</div>
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
