<script>
	import { page } from '$app/stores';
	import { view } from '$lib/stores';
</script>

<div
	class="btn-group me-1 me-md-3"
	class:invisible={!$page.routeId.startsWith('explore')}
	role="group"
>
	<input
		bind:group={$view}
		type="radio"
		class="btn-check"
		name="btnradio"
		id="btnradio1"
		autocomplete="off"
		value="grid"
	/>
	<label class="cursor-pointer" for="btnradio1"
		><span class="d-none d-md-block" class:text-decoration-underline={$view === 'grid'}>Grid</span
		><i
			class="bi bi-grid d-md-none d-block mx-1 fs-4"
			class:text-black-50={$view !== 'grid'}
		/></label
	>
	<span class="mx-1 d-none d-md-block">/</span>
	<input
		bind:group={$view}
		type="radio"
		class="btn-check"
		name="btnradio"
		id="btnradio2"
		autocomplete="off"
		value="list"
	/>
	<label class="cursor-pointer" for="btnradio2"
		><span class="d-none d-md-block" class:text-decoration-underline={$view === 'list'}>List</span
		><i
			class="bi bi-list-ul d-md-none d-block mx-1 fs-4"
			class:text-black-50={$view !== 'list'}
		/></label
	>
</div>
