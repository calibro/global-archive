<script>
	import { groupsDict } from '$lib/stores';
	import { timeDay } from 'd3-time';
	import Bookmark from '$lib/Bookmark.svelte';
	import ImgBg from '$lib/ImgBg.svelte';
	import { base } from '$app/paths';
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

<div class="h-100 position-relative">
	{#if newRecord}
		<span class="new badge bg-light">New</span>
	{/if}
	{#if resourceImage}
		<a href={`${base}/resource/${record.id}`}>
			<ImgBg url={resourceImage}>
				<img
					class="img-fluid shadow thumb "
					src={resourceImage}
					alt={record['Name of collection']}
				/>
			</ImgBg>
		</a>
	{/if}
	<div class="d-flex my-2 w-100">
		<div class="me-1">
			<h5 class="title">
				<a class="text-decoration-none text-body" href={`${base}/resource/${record.id}`}
					>{record['Name of collection']}</a
				>
			</h5>
			{#if host_institution}
				<h6 class="fst-italic host">{host_institution.fields['Name']}</h6>
			{/if}
		</div>
		<div class="ms-auto">
			<Bookmark {record} />
		</div>
	</div>
</div>

<style>
	.title,
	.host {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.thumb {
		height: 160px;
		width: auto;
		transform: scale(1);
		transition: transform 0.2s ease-in-out;
	}

	.thumb:hover {
		transform: scale(1.03);
	}

	.new {
		position: absolute;
		top: 5px;
		right: 5px;
	}
</style>
