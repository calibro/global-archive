<script>
	import { createEventDispatcher } from 'svelte';
	import { active_filters } from '$lib/stores';

	export const resetSearchForm = reset;
	let searchText;

	const dispatch = createEventDispatcher();

	function filterDimension() {
		if (searchText) {
			filterCf(searchText);
		} else {
			resetCf();
		}
	}

	function filterCf(value) {
		dispatch('filterCf', {
			value: value
		});
	}

	function reset() {
		searchText = null;
		resetCf();
	}

	function resetCf() {
		dispatch('resetCf');
	}
</script>

<div class="w-100">
	<input
		class="form-control rounded-pill border-dark"
		type="text"
		placeholder="Type to search..."
		bind:value={searchText}
		on:input={(e) => filterDimension()}
	/>
</div>
