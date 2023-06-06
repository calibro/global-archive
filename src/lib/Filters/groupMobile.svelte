<script>
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import { scaleLinear } from 'd3-scale';
	import { ascending } from 'd3-array';
	import { groupsDict, cfRecords, active_filters } from '$lib/stores';

	export let group;

	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

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

<div>
	<div class="title d-flex rounded bg-dark text-white mb-1 p-2 align-items-center">
		{group[0]}
		<div on:click={() => resetCf(group[0], $cfRecords.dims.get(group[0]))}>
			{#if $active_filters[group[0]]}
				<div class="badge bg-secondary ms-2">reset</div>
			{/if}
		</div>
		<div class="ms-auto" on:click={toggle}>
			<i class="bi" class:bi-chevron-down={!isOpen} class:bi-chevron-up={isOpen} />
		</div>
	</div>
	{#if isOpen}
		<div class="d-flex flex-column" transition:slide={{ duration: 300 }}>
			{#each facets as elm (elm.key)}
				{@const label = $groupsDict[group[0]].find((d) => d.id === elm.key)}
				<div
					class="facet d-flex justify-content-between px-2 pt-1 mb-1 rounded cursor-pointer"
					on:click={() => {
						filterCf(group[0], $cfRecords.dims.get(group[0]), elm.key);
					}}
					class:active={$active_filters[group[0]] && $active_filters[group[0]].includes(elm.key)}
					class:disabled={elm.value === 0}
				>
					<div>{label.fields.Name}</div>
					<div>{elm.value}</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.facet {
		border: 1px solid var(--bs-gray-200);
		background-color: var(--bs-gray-200);
		transition: all 0.2s ease-in-out;
		padding-bottom: 2px;
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
