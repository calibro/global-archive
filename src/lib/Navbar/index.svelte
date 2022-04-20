<script>
	import { base } from '$app/paths';
	import logo_symbol from '$lib/assets/logo_symbol.svg';
	import { page } from '$app/stores';
	import { showFilters, showPagesMobile } from '$lib/stores';
	import MediaQuery from 'svelte-media-query';
	import SwitchView from '$lib/SwitchView.svelte';
	import PagesMobile from './PagesMobile.svelte';

	function toggleFilters() {
		showFilters.update((d) => !d);
	}

	function togglePagesMobile() {
		showPagesMobile.update((d) => !d);
	}
</script>

<nav class="navbar navbar-light bg-white sticky-top border-bottom border-dark">
	<div class="container-fluid flex-nowrap">
		<button class="btn btn-light d-flex d-md-none" on:click={togglePagesMobile}>
			<i class="bi bi-list fs-1" />
		</button>
		<a
			class="navbar-brand border border-dark rounded-pill px-3 py-2 fw-bold d-flex align-items-center me-0 me-md-3"
			href={`${base}/`}
			><img src={logo_symbol} class="me-1" alt="logo symbol" height="30" />Global Archives Online</a
		>

		<div class="d-none d-md-flex flex-grow-1 align-items-center order-2 order-md-1">
			<ul
				class="navbar-nav flex-row mx-auto mb-2 mb-lg-0 border border-dark rounded-pill px-1 py-1 "
			>
				<li
					class="nav-item px-3"
					class:customActive={$page.routeId.startsWith('explore') ||
						$page.routeId.startsWith('resource')}
				>
					<a
						class="nav-link"
						class:active={$page.routeId.startsWith('explore') ||
							$page.routeId.startsWith('resource')}
						href={`${base}/explore`}>Explore</a
					>
				</li>
				<li class="nav-item px-3" class:customActive={$page.routeId.startsWith('bookmarks')}>
					<a
						class="nav-link"
						class:active={$page.routeId.startsWith('bookmarks')}
						href={`${base}/bookmarks`}>Bookmarks</a
					>
				</li>
				<li class="nav-item px-3" class:customActive={$page.routeId.startsWith('about')}>
					<a
						class="nav-link"
						class:active={$page.routeId.startsWith('about')}
						href={`${base}/about`}>About</a
					>
				</li>
				<li class="nav-item px-3" class:customActive={$page.routeId.startsWith('suggest')}>
					<a
						class="nav-link"
						class:active={$page.routeId.startsWith('suggest')}
						href={`${base}/suggest`}>Suggest</a
					>
				</li>
			</ul>
			<div class="d-none d-md-block">
				<SwitchView />
			</div>
		</div>
		<div class="order-1 order-md-2">
			<button
				class="btn btn-outline-dark rounded-pill px-3 py-2 d-none d-md-flex align-items-center"
				class:invisible={!$page.routeId.startsWith('explore')}
				on:click={() => toggleFilters()}
				><span class="me-1">Filters</span><i
					class="bi d-flex"
					class:bi-plus={!$showFilters}
					class:bi-x={$showFilters}
				/>
			</button>
			<button
				class="btn btn-light d-flex d-md-none"
				class:invisible={!$page.routeId.startsWith('explore')}
				on:click={() => toggleFilters()}
				><i class="bi d-flex fs-2" class:bi-funnel={!$showFilters} class:bi-x-lg={$showFilters} />
			</button>
		</div>
	</div>
</nav>

<MediaQuery query="(max-width: 767px)" let:matches>
	{#if matches}
		<PagesMobile />
	{/if}
</MediaQuery>

<style>
	.navbar-brand {
		font-size: 1rem;
	}

	.customActive {
		background-color: var(--bs-primary);
		border-radius: 50rem !important;
	}

	@media (min-width: 768px) {
		.navbar-brand {
			font-size: 1.25rem;
		}
	}
</style>
