<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { fetchTable } from '$lib/api';
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
		<div class="col-12">
			{#await fetchTable('About')}
				<p>loading...</p>
			{:then paragraphs}
				<div class="fs-5 pContainer">
					{#each paragraphs as paragraph}
						<SvelteMarkdown source={paragraph.fields.text} />
						{#if paragraph.fields.Attachments && paragraph.fields.Attachments.length > 0}
							<img
								class="img-fluid mb-3"
								alt="about"
								src={paragraph.fields.Attachments[0].thumbnails.large.url}
							/>
						{/if}
					{/each}
					<p>For information contact us at <b>globalarchives [at] lnu.se</b></p>
				</div>
			{/await}
		</div>
	</div>
</div>

<style>
	.pContainer {
		column-count: 2;
		column-gap: 2rem;
	}
</style>
