<script>
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let searchText;
	function filterDimension() {
		filterCf(searchText);
	}

	function filterCf(value) {
		dispatch('filterCf', {
			value: value
		});
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
