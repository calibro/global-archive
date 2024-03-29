<script>
	import { ascending, descending } from 'd3-array';
	import { cfRecords, showFilters, view } from '$lib/stores';
	import Filters from '$lib/Filters/index.svelte';
	import ActiveFilters from '$lib/ActiveFilters.svelte';
	import SwitchView from '$lib/SwitchView.svelte';
	import GridView from '$lib/GridView.svelte';
	import ListView from '$lib/ListView.svelte';
	import Resource from '$lib/Resource.svelte';
	import { beforeNavigate } from '$app/navigation';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

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
			history.pushState({}, '', `${$page.url.origin}${base}/resource/${id}`);
		}
	});

	function closeResource() {
		interceptedId = null;
		$page.url.origin;
		history.pushState({}, '', `${$page.url.origin}${base}/explore`);
	}

	function slideResource(node, { duration }) {
		const style = getComputedStyle(node);
		const numberPattern = /-?\d+\.?\d*/g;

		const values = style.transform.match(numberPattern);
		const x = +values[values.length - 2] * -1;
		const percentage = x >= 768 ? 70 : 90;

		return {
			duration,
			css: (t) => {
				return `
					transform: translateX(-${t * percentage}%);`;
			}
		};
	}

	function slideOvelay(node, { duration }) {
		const style = getComputedStyle(node);
		const numberPattern = /-?\d+\.?\d*/g;

		const values = style.transform.match(numberPattern);
		const x = +values[values.length - 2] * -1;
		const percentage = x >= 768 ? 1024 : 90;

		return {
			duration,
			css: (t) => {
				return `
					transform: translateX(-${t * percentage}${percentage === 90 ? '%' : 'px'});opacity: ${t * 1};`;
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
				<div class="col-12 col-md-auto">
					<p class="my-2 my-md-0 BespokeSerif me-2">
						Displaying: {total} / {$cfRecords.size()} collections
					</p>
				</div>
				<div class="col-6 col-md-auto ms-auto d-flex align-items-md-center flex-column flex-md-row">
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
				<div
					class=" d-flex d-md-none col-6 col-md-auto ms-auto d-flex align-items-md-center align-items-end flex-column flex-md-row"
				>
					<label class="col-auto me-2 BespokeSerif" for="">View:</label>
					<SwitchView />
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
			class="wrapperResource flex-shrink-0 flex-grow-0 border-start border-dark"
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
		transform: translateX(-90%);
		overflow-y: hidden;
	}

	.wrapperResource {
		width: 100%;
		overflow-y: auto;
		transform: translateX(-90%);
	}

	.overlay {
		transform: translateX(-90%);
	}

	@media (min-width: 768px) {
		.wrapperChild.resourceActive,
		.overlay {
			/* transform: translateX(-70%); */
			transform: translateX(-1024px);
		}

		.wrapperResource {
			width: 1024px;
			transform: translateX(-1024px);
		}

		.overlay {
			transform: translateX(-1024px);
		}
	}
</style>
