<script>
	import { slide } from 'svelte/transition';
	import YearPicker from '$lib/YearPicker/index.svelte';
	import Group from './group.svelte';
	import GroupMobile from './groupMobile.svelte';
	import Search from '$lib/Search.svelte';
	import { cfRecords, active_filters } from '$lib/stores';

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

	function filterSearch(e) {
		active_filters.update((d) => {
			d['search'] = e.value;
			return d;
		});
		const regex = new RegExp(e.value, 'gi');

		$cfRecords.dims.get('search').filterFunction((d) => {
			return regex.test(d);
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

<div class="filtersContainer border border-dark rounded my-2" transition:slide>
	<div class="px-3 px-md-4 pt-4">
		<div class="d-flex align-items-start align-items-md-center flex-column flex-md-row">
			{#if startYear && endYear}
				<YearPicker
					{startYear}
					{endYear}
					on:resetCf={() => resetFilterYears()}
					on:updateCf={(e) => filterYear(e)}
				/>
			{/if}
			<div class="ms-auto col-12 col-md-4 mt-3 mt-md-0">
				<Search on:filterCf={(e) => filterSearch(e.detail)} />
			</div>
		</div>

		<div class="overflow-hidden position-relative d-none d-md-flex">
			<div class="groupsContainer mt-3 d-flex flex-nowrap">
				{#each cfGroups as group}
					<Group
						{group}
						on:filterCf={(e) => filterDimension(e.detail.key, e.detail.dim, e.detail.value)}
						on:resetCf={(e) => resetFilterDimension(e.detail.key, e.detail.dim)}
					/>
				{/each}
			</div>
		</div>

		<div class="groupsContainerMobile my-3 d-block d-md-none">
			{#each cfGroups as group}
				<GroupMobile
					{group}
					on:filterCf={(e) => filterDimension(e.detail.key, e.detail.dim, e.detail.value)}
					on:resetCf={(e) => resetFilterDimension(e.detail.key, e.detail.dim)}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.groupsContainer {
		height: 250px;
		width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		/* position: relative; */
	}

	.groupsContainer:after {
		content: '';
		height: 100%;
		width: 15px;
		top: 0;
		position: absolute;
		right: 0;
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
		z-index: 3;
	}

	.filtersContainer {
		max-height: calc(100vh - 73px - 180px);
		width: 100%;
		overflow-y: auto;
	}

	@media (min-width: 768px) {
		.filtersContainer {
			max-height: unset;
			overflow-y: hidden;
		}
	}
</style>
