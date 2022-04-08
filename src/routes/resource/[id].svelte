<script>
	import { page } from '$app/stores';
	import { fetchResource } from '$lib/api';
	import { METADATA } from '$lib/utils';
	import { groupsDict } from '$lib/stores';
	import ResourceMap from '$lib/ResourceMap/index.svelte';
	import ResourceTimeline from '$lib/ResourceTimeline.svelte';
	import Responsive from '$lib/Responsive.svelte';
	import Bookmark from '$lib/Bookmark.svelte';
	import ImgBg from '$lib/ImgBg.svelte';
</script>

<div class="container">
	{#await fetchResource($page.params.id)}
		<!-- promise is pending -->
		<p>loading...</p>
	{:then resource}
		<div class="row">
			<div class="col-12">
				<h1>{resource.fields['Name of collection']}</h1>
				{#if resource.fields.Image && resource.fields.Image.length > 0}
					<ImgBg url={resource.fields.Image[0].thumbnails.large.url}>
						<img
							class="img-fluid shadow"
							src={resource.fields.Image[0].thumbnails.large.url}
							alt={resource.fields['Name of collection']}
						/>
					</ImgBg>
				{/if}
				<a href={resource.fields['Link to collection']} target="_blank">open website</a>
				<Bookmark record={resource} />
				<p>{resource.fields['Brief description of collection']}</p>
				{#each METADATA as meta}
					<div>
						<h5>
							{meta}
						</h5>
						{#if resource.fields[meta]}
							{#each resource.fields[meta] as metaKey}
								<p>
									{$groupsDict[meta]
										? $groupsDict[meta].find((d) => d.id === metaKey).fields['Name']
										: ''}
								</p>
							{/each}
						{:else}
							<p>---</p>
						{/if}
					</div>
				{/each}
				<div>
					<Responsive>
						<ResourceMap
							regions_concerned={resource.fields['Region concerned'].map((r) => {
								return $groupsDict['Region concerned']
									? $groupsDict['Region concerned'].find((d) => d.id === r).fields.Name
									: r;
							})}
						/>
					</Responsive>
				</div>
				<div>
					<Responsive>
						<ResourceTimeline
							startYear={resource.fields['Start year']}
							endYear={resource.fields['End year']}
							uncertain={resource.fields['Uncertain']}
						/>
					</Responsive>
				</div>
			</div>
		</div>
	{:catch error}
		<!-- promise was rejected -->
		<p>Something went wrong: {error}</p>
	{/await}
</div>
