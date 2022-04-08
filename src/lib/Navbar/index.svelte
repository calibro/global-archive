<script>
	import { view, showFilters } from '$lib/stores';

	function toggleFilters() {
		showFilters.update((d) => !d);
	}
</script>

<nav class="navbar navbar-expand-md navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Global Archives</a>
		<button class="navbar-toggler" type="button">
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link" href="/explore">Explore</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/suggest">Suggest</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/bookmarks">Bookmarks</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About</a>
				</li>
			</ul>
			<div class="btn-group me-2" role="group">
				<input
					bind:group={$view}
					type="radio"
					class="btn-check"
					name="btnradio"
					id="btnradio1"
					autocomplete="off"
					value="grid"
				/>
				<label class="btn btn-outline-secondary" for="btnradio1">Grid</label>

				<input
					bind:group={$view}
					type="radio"
					class="btn-check"
					name="btnradio"
					id="btnradio2"
					autocomplete="off"
					value="list"
				/>
				<label class="btn btn-outline-secondary" for="btnradio2">List</label>
			</div>
			<button class="btn btn-outline-secondary" on:click={() => toggleFilters()}
				>Filters <i class="bi" class:bi-plus={!$showFilters} class:bi-x={$showFilters} /></button
			>
		</div>
	</div>
</nav>
