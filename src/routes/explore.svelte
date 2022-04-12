<script>
	import { ascending, descending } from 'd3-array';
	import { cfRecords, showFilters, view } from '$lib/stores';
	import RecordCard from '$lib/RecordCard/index.svelte';
	import Filters from '$lib/Filters/index.svelte';
	import ActiveFilters from '$lib/ActiveFilters.svelte';
	import GridView from '$lib/GridView.svelte';
	import ListView from '$lib/ListView.svelte';

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
</script>

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
