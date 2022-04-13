<script>
	import logo_symbol from '$lib/assets/logo_symbol.svg';
	import { page } from '$app/stores';
	import { view, showFilters } from '$lib/stores';

	function toggleFilters() {
		showFilters.update((d) => !d);
	}
</script>

<nav class="navbar navbar-expand-md navbar-light bg-white sticky-top border-bottom border-dark">
	<div class="container-fluid">
		<a
			class="navbar-brand border border-dark rounded-pill px-3 py-2 fw-bold d-flex align-items-center"
			href="/"
			><img src={logo_symbol} class="me-1" alt="logo symbol" height="30" />Global Archives Online</a
		>
		<button class="navbar-toggler" type="button">
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mx-auto mb-2 mb-lg-0 border border-dark rounded-pill px-1 py-1 ">
				<li class="nav-item px-3" class:customActive={$page.url.pathname.startsWith('/explore')}>
					<a
						class="nav-link"
						class:active={$page.url.pathname.startsWith('/explore')}
						href="/explore">Explore</a
					>
				</li>
				<li class="nav-item px-3" class:customActive={$page.url.pathname.startsWith('/suggest')}>
					<a
						class="nav-link"
						class:active={$page.url.pathname.startsWith('/suggest')}
						href="/suggest">Suggest</a
					>
				</li>
				<li class="nav-item px-3" class:customActive={$page.url.pathname.startsWith('/bookmarks')}>
					<a
						class="nav-link"
						class:active={$page.url.pathname.startsWith('/bookmarks')}
						href="/bookmarks">Bookmarks</a
					>
				</li>
				<li class="nav-item px-3" class:customActive={$page.url.pathname.startsWith('/about')}>
					<a class="nav-link" class:active={$page.url.pathname.startsWith('/about')} href="/about"
						>About</a
					>
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
				<label class="btn btn-outline-dark customBorderLeft py-2" for="btnradio1">Grid</label>

				<input
					bind:group={$view}
					type="radio"
					class="btn-check"
					name="btnradio"
					id="btnradio2"
					autocomplete="off"
					value="list"
				/>
				<label class="btn btn-outline-dark customBorderRight py-2" for="btnradio2">List</label>
			</div>
			<button
				class="btn btn-outline-dark rounded-pill px-3 py-2 d-flex align-items-center"
				on:click={() => toggleFilters()}
				><span class="me-1">Filters</span><i
					class="bi d-flex"
					class:bi-plus={!$showFilters}
					class:bi-x={$showFilters}
				/></button
			>
		</div>
	</div>
</nav>

<style>
	.customActive {
		background-color: var(--bs-primary);
		border-radius: 50rem !important;
	}

	.customBorderLeft {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-top-left-radius: 50rem;
		border-bottom-left-radius: 50rem;
	}

	.customBorderRight {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-top-right-radius: 50rem;
		border-bottom-right-radius: 50rem;
	}
</style>
