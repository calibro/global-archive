<script>
	import { bookmarks } from '$lib/stores';
	import { toggleElement } from '$lib/utils';

	export let record;

	$: bookmarked = $bookmarks.findIndex((d) => d.id === record.id);

	function toggleBookmark() {
		bookmarks.update((d) => {
			return toggleElement(record, d);
		});
	}
</script>

<div on:click={toggleBookmark} class="cursor-pointer">
	<i class="bi" class:bi-bookmark-fill={bookmarked > -1} class:bi-bookmark={bookmarked === -1} />
</div>
