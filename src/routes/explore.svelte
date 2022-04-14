<script>
	import { goto } from '$app/navigation';
	import { ascending, descending } from 'd3-array';
	import { cfRecords, showFilters, view } from '$lib/stores';
	import Filters from '$lib/Filters/index.svelte';
	import ActiveFilters from '$lib/ActiveFilters.svelte';
	import GridView from '$lib/GridView.svelte';
	import ListView from '$lib/ListView.svelte';
	import Resource from '$lib/Resource.svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	const sort_options = [
		{ value: 'Created', label: 'Most recent' },
		{ value: 'Name of collection', label: 'Alphabetically' }
	];

	let sort_selected;
	let sorted_records = [];
	$: total = $cfRecords.size();

	$: createRecords(sort_selected, $cfRecords);

	$: $cfRecords.onChange((e) => {
		createRecords(sort_selected, $cfRecords);
		total = $cfRecords.allFiltered().length;
	});

	function createRecords(sort, cf) {
		const records = cf.allFiltered() || [];
		records.sort((a, b) => {
			return sort
				? sort === 'Created'
					? descending(a[sort], b[sort])
					: ascending(a[sort], b[sort])
				: 1;
		});
		sorted_records = [...records];
	}

	let interceptedId;

	beforeNavigate(async ({ to, cancel }) => {
		if (interceptedId) return;
		const split = to.pathname.split('/');
		if (split[split.length - 2] === 'resource') {
			cancel();
			const id = split[split.length - 1];
			interceptedId = id;
			history.pushState({}, '', `${$page.url.origin}/resource/${id}`);
		}
	});

	function closeResource() {
		interceptedId = null;
		$page.url.origin;
		history.pushState({}, '', `${$page.url.origin}/explore`);
	}

	function slideResource(node, { duration }) {
		return {
			duration,
			css: (t) => {
				return `
					transform: translate(-${t * 70}%);`;
			}
		};
	}

	function slideOvelay(node, { duration }) {
		return {
			duration,
			css: (t) => {
				return `
					transform: translate(-${t * 70}%);opacity: ${t * 1};`;
			}
		};
	}
</script>

<div class="wrapper vw-100 d-flex">
	<div
		class="wrapperChild flex-shrink-0 flex-grow-0 w-100 h-100 position-relative"
		class:resourceActive={interceptedId}
	>
		<div class="container">
			{#if $showFilters}
				<Filters />
			{/if}
			<div class="row align-items-center mt-3">
				<div class="col-auto">
					<p class="my-0 BespokeSerif me-2">Displaying: {total} / {$cfRecords.size()} archives</p>
				</div>
				<div class="col-auto ms-auto d-flex align-items-center">
					<label class="col-auto me-2 BespokeSerif" for="sort-select">Sort by:</label>
					<div class="col-auto">
						<select
							id="sort-select"
							class="form-select rounded-pill border-dark"
							bind:value={sort_selected}
						>
							{#each sort_options as option}
								<option value={option.value}>
									{option.label}
								</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<ActiveFilters />
				</div>
			</div>
			<div class="row mt-2">
				{#if sorted_records.length}
					{#if $view === 'grid'}
						<GridView records={sorted_records} />
					{:else}
						<ListView records={sorted_records} />
					{/if}
				{:else}
					<div class="col-12">
						<h6 class="text-center">No results! Remove some filters</h6>
					</div>
				{/if}
			</div>
		</div>
	</div>
	{#if interceptedId}
		<div
			class="overlay position-absolute top-0 left-0 h-100 w-100  bg-dark bg-opacity-50 cursor-pointer"
			class:resourceActive={interceptedId}
			in:fade={{ delay: 300 }}
			out:slideOvelay={{ duration: 300 }}
			on:click={() => closeResource()}
		/>
	{/if}
	{#if interceptedId}
		<div
			class="wrapperResource flex-shrink-0 flex-grow-0 w-100 border-start border-dark"
			transition:slideResource={{ duration: 300 }}
		>
			<Resource id={interceptedId} fromExplore={true} />
		</div>
	{/if}
</div>

<style>
	.wrapper {
		overflow: hidden;
		height: calc(100% - 67px);
	}

	.wrapperChild {
		transform: translateX(0%);
		transition: transform 0.3s linear;
		overflow-y: auto;
	}

	.wrapperChild.resourceActive,
	.overlay {
		transform: translateX(-70%);
		overflow-y: hidden;
	}

	.wrapperResource {
		overflow-y: auto;
		transform: translateX(-70%);
	}

	.overlay {
		transform: translateX(-70%);
	}
</style>
