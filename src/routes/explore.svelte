<script>
	import { onMount } from 'svelte';
	import { ascending, descending } from 'd3-array';
	import { cfRecords, showFilters } from '$lib/stores';
	import RecordCard from '$lib/RecordCard/index.svelte';
	import Filters from '$lib/Filters/index.svelte';
	import ActiveFilters from '$lib/ActiveFilters.svelte';

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

	onMount(async () => {
		// for (let a of ATTRIBS) {
		// 	if (a.group) {
		// 		const res = await fetchTable(a.table_name, {
		// 			view: 'Grid view',
		// 			filterByFormula: '{Count}>0'
		// 		});
		// 		if (res) {
		// 			groupsDict.update((d) => {
		// 				return { ...d, [a.key]: res };
		// 			});
		// 		}
		// 	}
		// }
		// const resRecords = await fetchTable('GAO final', {
		// 	view: 'Full view',
		// 	filterByFormula: 'AND(REGEX_MATCH({Status}, "Published"))'
		// });
		// if (resRecords) {
		// 	console.log(resRecords[0]);
		// 	records.set(resRecords);
		// }
	});
</script>

<div class="container">
	{#if $showFilters}
		<Filters />
	{/if}
	<div class="row align-items-center">
		<div class="col-auto">
			<p class="m-0">Displaying: {total} / {$cfRecords.size()} archives</p>
			<ActiveFilters />
		</div>
		<div class="col-auto ms-auto d-flex align-items-center">
			<label class="col-auto me-2" for="sort-select">Sort by:</label>
			<div class="col-auto">
				<select id="sort-select" class="form-select" bind:value={sort_selected}>
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
		{#each sorted_records as record (record.id)}
			<div class="col-3 my-2">
				<RecordCard {record} />
			</div>
		{/each}
	</div>
</div>
