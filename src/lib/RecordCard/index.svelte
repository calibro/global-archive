<script>
	import { groupsDict } from '$lib/stores';
	import { timeDay } from 'd3-time';
	import Bookmark from '$lib/Bookmark.svelte';
	import ImgBg from '$lib/ImgBg.svelte';
	export let record;

	$: host_institution =
		$groupsDict['Host institution'] &&
		$groupsDict['Host institution'].find((d) => d.id === record['Host institution'][0]);

	const newRecord = timeDay.count(new Date(record['Created']), new Date()) <= 14;
	let resourceImage;

	if (record.Image && record.Image.length > 0) {
		resourceImage = record.Image[0].thumbnails.large.url;
	}
</script>

<div class="p-2 border h-100">
	{#if newRecord}
		<span class="badge bg-secondary">New</span>
	{/if}
	{#if resourceImage}
		<ImgBg url={resourceImage}>
			<img class="img-fluid shadow" src={resourceImage} alt={record['Name of collection']} />
		</ImgBg>
	{/if}
	<h3><a href={`/resource/${record.id}`}>{record['Name of collection']}</a></h3>
	{#if host_institution}
		<h6>{host_institution.fields['Name']}</h6>
	{/if}
	<Bookmark {record} />
</div>
