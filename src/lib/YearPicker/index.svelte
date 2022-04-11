<script>
	import { createEventDispatcher } from 'svelte';
	import Select from 'svelte-select';
	import { range } from 'd3-array';
	export let startYear, endYear;

	const dispatch = createEventDispatcher();

	let selectedStartYear = { value: startYear, label: startYear.toString() };
	let selectedEndYear = { value: endYear, label: endYear.toString() };

	let startRange = range(startYear, endYear).map((d) => {
		return { value: d, label: d.toString() };
	});
	let endRange = range(startYear + 1, endYear + 1).map((d) => {
		return { value: d, label: d.toString() };
	});

	function handleSelectStart(event) {
		endRange = range(event.detail.value + 1, endYear + 1).map((d) => {
			return { value: d, label: d.toString() };
		});
		if (selectedStartYear.value === startYear && selectedEndYear.value === endYear) return;
		updateCf(selectedStartYear.value, selectedEndYear.value);
	}

	function handleSelectEnd(event) {
		startRange = range(startYear, event.detail.value).map((d) => {
			return { value: d, label: d.toString() };
		});
		if (selectedStartYear.value === startYear && selectedEndYear.value === endYear) return;
		updateCf(selectedStartYear.value, selectedEndYear.value);
	}

	function reset() {
		startRange = range(startYear, endYear).map((d) => {
			return { value: d, label: d.toString() };
		});
		endRange = range(startYear + 1, endYear + 1).map((d) => {
			return { value: d, label: d.toString() };
		});
		selectedStartYear = { value: startYear, label: startYear.toString() };
		selectedEndYear = { value: endYear, label: endYear.toString() };
		resetCf();
	}

	function updateCf(start, end) {
		dispatch('updateCf', {
			start,
			end
		});
	}

	function resetCf() {
		dispatch('resetCf');
	}
</script>

<Select
	placeholder="From"
	bind:items={startRange}
	bind:value={selectedStartYear}
	on:select={handleSelectStart}
	isClearable={false}
	noOptionsMessage="Year out of range"
/>
<Select
	placeholder="to"
	items={endRange}
	bind:value={selectedEndYear}
	on:select={handleSelectEnd}
	isClearable={false}
	noOptionsMessage="Year out of range"
/>
<div on:click={reset}>reset</div>
