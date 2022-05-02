<script>
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { fetchResource } from '$lib/api';
	import { METADATA } from '$lib/utils';
	import { groupsDict } from '$lib/stores';
	import ResourceMap from '$lib/ResourceMap/index.svelte';
	import ResourceTimeline from '$lib/ResourceTimeline.svelte';
	import Responsive from '$lib/Responsive.svelte';
	import Bookmark from '$lib/Bookmark.svelte';
	import ImgBg from '$lib/ImgBg.svelte';

	export let id;
	export let fromExplore = false;
	let hover = false;
</script>

<div class="container">
	{#await fetchResource(id)}
		<div class="my-5">
			<div class="spinner-border spinner-border-sm text-primary" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	{:then resource}
		<div class="row">
			<div
				class="col-md-8"
				class:col-12={!fromExplore}
				class:offset-0={!fromExplore}
				class:offset-md-2={!fromExplore}
				class:col-10={fromExplore}
			>
				<div class="d-flex my-3 align-items-baseline">
					<h1 class="my-0 me-1">{resource.fields['Name of collection']}</h1>
					<div class="ms-auto px-3 border border-dark rounded-pill d-none d-md-block">
						<Bookmark record={resource} />
					</div>
				</div>

				{#if resource.fields.Image && resource.fields.Image.length > 0}
					<ImgBg url={resource.fields.Image[0].thumbnails.large.url}>
						<div
							class="w-100 h-100 position-relative"
							on:mouseover={() => (hover = true)}
							on:mouseout={() => (hover = false)}
							on:focus={() => null}
							on:blur={() => null}
						>
							<img
								class="img-fluid shadow"
								src={resource.fields.Image[0].thumbnails.large.url}
								alt={resource.fields['Name of collection']}
							/>
							{#if hover}
								<div
									transition:fade
									class="overlay position-absolute align-items-center justify-content-center d-none d-md-flex"
								>
									<a
										href={resource.fields['Link to collection']}
										target="_blank"
										class="btn btn-light rounded-pill btn-lg"
										role="button">Open website</a
									>
								</div>
							{/if}
						</div>
					</ImgBg>
				{/if}
				<div class="d-flex d-md-none mt-3">
					<a
						href={resource.fields['Link to collection']}
						target="_blank"
						class="btn btn-light rounded-pill border-dark"
						role="button">Open website</a
					>
					<div class="ms-auto px-3 border border-dark rounded-pill d-flex align-items-center">
						<Bookmark record={resource} />
					</div>
				</div>
				<p class="BespokeSerif mt-md-3 mt-0 mb-3 border-bottom border-dark py-3">
					{resource.fields['Brief description of collection']}
				</p>
				<div class="row">
					{#each METADATA as meta}
						<div class="col-6">
							<h6 class="fw-light mb-1">
								{meta}
							</h6>
							{#if resource.fields[meta]}
								<p class="BespokeSerif">
									{$groupsDict[meta]
										.filter((d) => resource.fields[meta].includes(d.id))
										.map((d) => d.fields['Name'])
										.join(', ')}
								</p>
							{:else}
								<p>---</p>
							{/if}
						</div>
					{/each}
				</div>

				<div class="border-top border-dark py-3">
					<h6 class="fw-light mb-1">Region concerned</h6>
					<p class="BespokeSerif">
						{$groupsDict['Region concerned']
							.filter((d) => resource.fields['Region concerned'].includes(d.id))
							.map((d) => d.fields['Name'])
							.join(', ')}
					</p>
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
				<div class="border-top border-dark py-3">
					<h6 class="fw-light mb-3">
						Period {#if resource.fields['uncertain']}
							<span>[uncertain]</span>
						{/if}:
						<span class="BespokeSerif fw-bold"
							>{resource.fields['Start year']} - {resource.fields['End year']}</span
						>
					</h6>
					<Responsive>
						<ResourceTimeline
							startYear={resource.fields['Start year']}
							endYear={resource.fields['End year']}
							uncertain={resource.fields['uncertain']}
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

<style>
	.overlay {
		background-color: rgba(0, 0, 0, 0.5);
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
