<script>
	import { csvFormat } from 'd3-dsv';
	export let data;
	export let filename = 'filename';
	export let type = 'link';
	export let bom = 2;
	function download(data, filename, bom) {
		const bomCode = bom ? '\ufeff' : '';
		let csvContent = null;
		if (typeof data === 'object') {
			csvContent = csvFormat(data);
		} else {
			csvContent = data;
		}
		const csvData = new Blob([`${bomCode}${csvContent}`], {
			type: 'text/csv;charset=utf-8;'
		});
		const csvURL = window.URL.createObjectURL(csvData);

		const link = document.createElement('a');
		link.href = csvURL;
		link.setAttribute('download', `${filename}.csv`);
		link.click();
		link.remove();
	}
</script>

{#if type === 'link'}
	<span on:click={() => download(data, filename, bom)} class="link">
		<slot /><i class="bi bi-file-earmark-arrow-down" />
	</span>
{:else}
	<button class="btn btn-sm btn-outline-dark" on:click={() => download(data, filename, bom)}>
		<slot /><i class="bi bi-file-earmark-arrow-down ms-2" />
	</button>
{/if}

<style>
	.link {
		cursor: pointer;
	}
</style>
