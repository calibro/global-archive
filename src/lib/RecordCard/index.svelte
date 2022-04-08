<script>
	import { groupsDict, bookmarks } from '$lib/stores';
	import { toggleElement } from '$lib/utils';
	import { timeDay } from 'd3-time';
	export let record;

	$: host_institution = $groupsDict['Host institution'].find(
		(d) => d.id === record['Host institution'][0]
	);

	$: bookmarked = $bookmarks.findIndex((d) => d.id === record.id);

	const newRecord = timeDay.count(new Date(record['Created']), new Date()) <= 14;

	function toggleBookmark() {
		bookmarks.update((d) => {
			return toggleElement(record, d);
		});
	}
</script>

<div class="p-2 border h-100">
	{#if newRecord}
		<span class="badge bg-secondary">New</span>
	{/if}
	<h3><a href={`/resource/${record.id}`}>{record['Name of collection']}</a></h3>
	{#if host_institution}
		<h6>{host_institution.fields['Name']}</h6>
	{/if}
	<div on:click={toggleBookmark} class="cursor-pointer">
		<i class="bi" class:bi-bookmark-fill={bookmarked > -1} class:bi-bookmark={bookmarked === -1} />
	</div>
</div>
