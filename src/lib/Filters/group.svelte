<script>
	import { createEventDispatcher } from 'svelte';
	import { scaleLinear } from 'd3-scale';
	import { ascending, descending } from 'd3-array';
	import { groupsDict, cfRecords, active_filters } from '$lib/stores';

	export let group;

	const dispatch = createEventDispatcher();
	const scale = scaleLinear()
		.domain([1, group[1].top(1)[0].value])
		.range([4, 60])
		.clamp(true);

	$: facets = [...group[1].all()].sort((a, b) =>
		ascending(
			$groupsDict[group[0]].find((d) => d.id === a.key).fields.Name,
			$groupsDict[group[0]].find((d) => d.id === b.key).fields.Name
		)
	);

	function filterCf(key, dim, value) {
		dispatch('filterCf', {
			key,
			dim,
			value
		});
	}

	function resetCf(key, dim) {
		dispatch('resetCf', {
			key,
			dim
		});
	}
</script>

<div class="groupContainer">
	<div class="title d-flex mb-2 bg-white position-sticky top-0">
		{group[0]}
		<div
			class="cursor-pointer ms-auto"
			on:click={() => resetCf(group[0], $cfRecords.dims.get(group[0]))}
		>
			{#if $active_filters[group[0]]}
				<span class="badge bg-secondary">reset</span>
			{/if}
		</div>
	</div>

	<div class="d-flex flex-column">
		{#each facets as elm (elm.key)}
			{@const label = $groupsDict[group[0]].find((d) => d.id === elm.key)}
			<div
				class="facet d-flex justify-content-between px-2 pt-1 mb-1 rounded cursor-pointer"
				on:click={() => {
					filterCf(group[0], $cfRecords.dims.get(group[0]), elm.key);
				}}
				class:active={$active_filters[group[0]] && $active_filters[group[0]].includes(elm.key)}
				class:disabled={elm.value === 0}
				style={`padding-bottom:${scale(elm.value)}px`}
			>
				<div>{label.fields.Name}</div>
				<div>{elm.value}</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.groupContainer {
		height: 100%;
		overflow-y: auto;
		flex: 0 0 300px;
		margin-right: 30px;
	}

	.title {
		z-index: 1;
	}

	.facet {
		border: 1px solid var(--bs-gray-200);
		background-color: var(--bs-gray-200);
		transition: all 0.2s ease-in-out;
	}

	.facet:hover {
		border: 1px solid var(--bs-dark);
	}

	.facet.active {
		background-color: var(--bs-primary);
		border: 1px solid var(--bs-primary);
	}

	.facet.disabled {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
