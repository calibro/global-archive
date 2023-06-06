<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { fetchTable } from '$lib/api';
	import { ascending } from 'd3-array';
</script>

<div class="container">
	<div class="row my-3">
		<div class="col-12">
			<h1 class="display-2">
				A directory of open digital collections for the study of colonial and global history
			</h1>
		</div>
	</div>
	<div class="row">
		<div class="col-12 pb-4">
			{#await fetchTable('About')}
				<div class="spinner-border spinner-border-sm text-primary" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			{:then paragraphs}
				<div class="fs-5 pContainer">
					{#each paragraphs.sort((a, b) => ascending(a.fields.Name, b.fields.Name)) as paragraph}
						<SvelteMarkdown source={paragraph.fields.text} />
						{#if paragraph.fields.Attachments && paragraph.fields.Attachments.length > 0}
							<img
								class="img-fluid mb-3"
								alt="about"
								src={paragraph.fields.Attachments[0].thumbnails.large.url}
							/>
						{/if}
					{/each}
				</div>
			{/await}
		</div>
	</div>
</div>

<style>
	.pContainer {
		column-count: 1;
	}

	@media (min-width: 768px) {
		.pContainer {
			column-count: 2;
			column-gap: 2rem;
		}
	}
</style>
