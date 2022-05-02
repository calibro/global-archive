<script>
	import { base } from '$app/paths';
	import CSVDownloader from '$lib/CSVDownloader.svelte';
	import { bookmarks, groupsDict } from '$lib/stores';
	import ListView from '$lib/ListView.svelte';

	const keepMeta = [
		'Name of collection',
		'Link to collection',
		'Brief description of collection',
		'End year',
		'Start year',
		'State/Nation',
		'Organisation',
		'Host institution',
		'Keywords',
		'Type of sources',
		'Main language of collection'
	];

	$: records = $bookmarks ? $bookmarks : [];
	$: csv = records.map((d) => {
		const elm = { ...d };
		for (const p in elm) {
			if (!keepMeta.includes(p)) {
				delete elm[p];
			}
			if ($groupsDict[p] && elm[p]) {
				console.log(elm[p]);
				elm[p] = $groupsDict[p]
					.filter((g) => elm[p].includes(g.id))
					.map((g) => g.fields['Name'])
					.join(', ');
			}
		}
		return elm;
	});

	$: console.log($groupsDict);
</script>

<div class="container">
	{#if records.length}
		<div class="row mt-3">
			<ListView {records} />
		</div>
		<div class="row">
			<div class="col-auto ms-auto">
				<CSVDownloader type="button" data={csv} filename={'global-archive-list.csv'}
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
