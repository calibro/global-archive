<script>
	import YearPicker from '$lib/YearPicker/index.svelte';
	import { groupsDict, cfRecords, active_filters } from '$lib/stores';

	$: cfGroups = [...Array.from($cfRecords.groups)];

	$: startYear = $cfRecords.dims.get('Start year').bottom(1)[0]
		? $cfRecords.dims.get('Start year').bottom(1)[0]['Start year']
		: null;
	$: endYear = $cfRecords.dims.get('End year').top(1)[0]
		? $cfRecords.dims.get('End year').top(1)[0]['End year']
		: null;

	function update() {
		cfGroups = [...Array.from($cfRecords.groups)];
		console.log($active_filters);
	}

	function filterDimension(key, dim, value) {
		if (!$active_filters[key]) {
			$active_filters[key] = [value];
		} else {
			const index = $active_filters[key].findIndex((d) => d === value);
			index === -1 ? $active_filters[key].push(value) : $active_filters[key].splice(index, 1);
		}

		if ($active_filters[key].length) {
			dim.filterFunction((d) => {
				return $active_filters[key].includes(d);
			});
		} else {
			dim.filterAll();
		}

		update();
	}

	function filterYear(e) {
		$active_filters['years'] = e.detail;

		$cfRecords.dims.get('Start year').filterFunction((d) => {
			return d >= e.detail.start;
		});

		$cfRecords.dims.get('End year').filterFunction((d) => {
			return d <= e.detail.end;
		});

		update();
	}

	function resetFilterDimension(key, dim) {
		dim.filterAll();
		$active_filters[key] = null;
		update();
	}
</script>

<div class="border my-2 p-2">
	<div>
		{#if startYear && endYear}
			<YearPicker
				{startYear}
				{endYear}
				on:resetCf={() => {
					resetFilterDimension('years', $cfRecords.dims.get('Start year'));
					resetFilterDimension('years', $cfRecords.dims.get('End year'));
				}}
				on:updateCf={filterYear}
			/>
		{/if}
	</div>
	<div class="my-5 d-flex">
		{#each cfGroups as group}
			<div class="mx-2">
				{group[0]}
				{group[1].size()}
				<div on:click={() => resetFilterDimension(group[0], $cfRecords.dims.get(group[0]))}>
					reset
				</div>
				<ul>
					{#each group[1].all() as elm}
						{@const label = $groupsDict[group[0]].find((d) => d.id === elm.key)}
						<li
							on:click={() => {
								filterDimension(group[0], $cfRecords.dims.get(group[0]), elm.key);
							}}
						>
							{label.fields.Name} - {elm.value}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
