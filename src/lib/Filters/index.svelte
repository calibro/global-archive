<script>
	import YearPicker from '$lib/YearPicker/index.svelte';
	import Group from './group.svelte';
	import { cfRecords, active_filters } from '$lib/stores';
	import { dirty_components } from 'svelte/internal';

	$: cfGroups = [...Array.from($cfRecords.groups)];

	$: startYear = $cfRecords.dims.get('Start year').bottom(1)[0]
		? $cfRecords.dims.get('Start year').bottom(1)[0]['Start year']
		: null;
	$: endYear = $cfRecords.dims.get('End year').top(1)[0]
		? $cfRecords.dims.get('End year').top(1)[0]['End year']
		: null;

	function update() {
		cfGroups = [...Array.from($cfRecords.groups)];
	}

	function filterDimension(key, dim, value) {
		if (!$active_filters[key]) {
			active_filters.update((d) => {
				d[key] = [value];
				return d;
			});
		} else {
			const index = $active_filters[key].findIndex((d) => d === value);
			active_filters.update((d) => {
				index === -1 ? d[key].push(value) : d[key].splice(index, 1);
				if (!d[key].length) delete d[key];
				return d;
			});
			//index === -1 ? $active_filters[key].push(value) : $active_filters[key].splice(index, 1);
		}

		if ($active_filters[key] && $active_filters[key].length) {
			dim.filterFunction((d) => {
				return $active_filters[key].includes(d);
			});
		} else {
			dim.filterAll();
		}

		update();
	}

	function filterYear(e) {
		active_filters.update((d) => {
			d['years'] = e.detail;
			return d;
		});

		$cfRecords.dims.get('Start year').filterFunction((d) => {
			return d >= e.detail.start;
		});

		$cfRecords.dims.get('End year').filterFunction((d) => {
			return d <= e.detail.end;
		});

		update();
	}

	function resetFilterYears() {
		$cfRecords.dims.get('Start year').filterAll();
		$cfRecords.dims.get('End year').filterAll();
		//$active_filters['years'] = null;
		active_filters.update((d) => {
			delete d['years'];
			return d;
		});
		update();
	}

	function resetFilterDimension(key, dim) {
		dim.filterAll();
		// $active_filters[key] = null;
		active_filters.update((d) => {
			delete d[key];
			//d[key] = null;
			return d;
		});
		update();
	}
</script>

<div class="border border-dark rounded my-2 p-4">
	{#if startYear && endYear}
		<YearPicker
			{startYear}
			{endYear}
			on:resetCf={() => resetFilterYears()}
			on:updateCf={(e) => filterYear(e)}
		/>
	{/if}
	<div class="groupsContainer mt-3 d-inline-flex">
		{#each cfGroups as group}
			<Group
				{group}
				on:filterCf={(e) => filterDimension(e.detail.key, e.detail.dim, e.detail.value)}
				on:resetCf={(e) => resetFilterDimension(e.detail.key, e.detail.dim)}
			/>
		{/each}
	</div>
</div>

<style>
	.groupsContainer {
		height: 250px;
		width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
	}
</style>
