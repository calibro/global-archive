<script>
	import { onMount } from 'svelte';
	import Loader from '$lib/Loader.svelte';
	import { groupsDict, records } from '$lib/stores';
	import { ATTRIBS } from '$lib/utils';
	import { fetchTable } from '$lib/api';

	let loading = false;
	onMount(async () => {
		if (!$records.length) {
			loading = true;
			for (let a of ATTRIBS) {
				if (a.group) {
					const res = await fetchTable(a.table_name, {
						view: 'Grid view',
						filterByFormula: '{Count}>0'
					});

					if (res) {
						groupsDict.update((d) => {
							return { ...d, [a.key]: res };
						});
					}
				}
			}

			const resRecords = await fetchTable('GAO final', {
				view: 'Full view',
				filterByFormula: 'AND(REGEX_MATCH({Status}, "Published"))'
			});

			if (resRecords) {
				records.set(resRecords);
			}
			loading = false;
		}
	});
</script>

{#if loading}
	<Loader />
{:else}
	<slot />
{/if}
