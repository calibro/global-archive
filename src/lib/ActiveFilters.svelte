<script>
	import { active_filters, groupsDict } from '$lib/stores';

	$: filters = [...Object.entries($active_filters)];
</script>

<div class="mt-3 mt-md-0">
	{#each filters as [key, values]}
		{#if values && values.length > 0}
			{#each values as value}
				{#if value}
					<span class="badge rounded-pill bg-dark me-1"
						>{$groupsDict[key] && $groupsDict[key].find((d) => d.id === value).fields.Name}</span
					>
				{/if}
			{/each}
		{:else if values}
			<span class="badge rounded-pill bg-dark">{values.start} - {values.end}</span>
		{/if}
	{/each}
</div>
