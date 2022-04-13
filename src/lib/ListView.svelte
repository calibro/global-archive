<script>
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { groupsDict } from '$lib/stores';
	import Bookmark from '$lib/Bookmark.svelte';
	import { HEADERS } from '$lib/utils';
	export let records = [];
</script>

<div class="col-12">
	<div class="table-responsive">
		<table class="table">
			<thead>
				<tr>
					{#each HEADERS as header}
						<th class="text-muted fw-normal" scope="col"><small>{header.label}</small></th>
					{/each}
					<th class="header" scope="col" />
					<th class="header" scope="col" />
				</tr>
			</thead>
			<tbody>
				{#each records as record (record.id)}
					<tr class="line cursor-pointer" on:click={() => goto(`${base}/resource/${record.id}`)}>
						{#each HEADERS as header}
							{#if header.multiple}
								<td class="fst-italic border-dark"
									>{$groupsDict[header.label]
										.filter((d) => record[header.label].includes(d.id))
										.map((d) => d.fields['Name'])
										.join(', ')}</td
								>
							{:else}
								<td class="border-dark">{record[header.label]}</td>
							{/if}
						{/each}
						<td class="border-dark"><Bookmark {record} /></td>
						<td class="border-dark"
							><a class="text-body" href={record['Link to collection']} target="_blank"
								><i class="bi bi-link" /></a
							></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.line {
		background-color: #fff;
		transition: background-color 0.2s linear;
	}
	.line:hover {
		background-color: #f1f1f1;
	}
</style>
