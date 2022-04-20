<script>
	import { showPagesMobile } from '$lib/stores';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<div
	id="pagesMobile"
	class:open={$showPagesMobile}
	class="bg-white w-100 d-flex p-2"
	on:click={() => showPagesMobile.update((d) => false)}
>
	<ul
		class="navbar-nav d-flex flex-column border border-dark rounded px-2 py-1 w-100 mb-0 justify-content-stretch"
	>
		<li
			class="nav-item px-3 h-100 border border-dark my-1 rounded d-flex align-items-center justify-content-center"
			class:customActive={$page.routeId.startsWith('explore') ||
				$page.routeId.startsWith('resource')}
		>
			<a
				class="nav-link text-body"
				class:active={$page.routeId.startsWith('explore') || $page.routeId.startsWith('resource')}
				href={`${base}/explore`}>Explore</a
			>
		</li>
		<li
			class="nav-item px-3 h-100 border border-dark my-1 rounded d-flex align-items-center justify-content-center"
			class:customActive={$page.routeId.startsWith('bookmarks')}
		>
			<a
				class="nav-link text-body"
				class:active={$page.routeId.startsWith('bookmarks')}
				href={`${base}/bookmarks`}>Bookmarks</a
			>
		</li>
		<li
			class="nav-item px-3 h-100 border border-dark my-1 rounded d-flex align-items-center justify-content-center"
			class:customActive={$page.routeId.startsWith('about')}
		>
			<a
				class="nav-link text-body"
				class:active={$page.routeId.startsWith('about')}
				href={`${base}/about`}>About</a
			>
		</li>
		<li
			class="nav-item px-3 h-100 border border-dark my-1 d-flex align-items-center justify-content-center"
			class:customActive={$page.routeId.startsWith('suggest')}
		>
			<a
				class="nav-link text-body"
				class:active={$page.routeId.startsWith('suggest')}
				href={`${base}/suggest`}>Suggest</a
			>
		</li>
	</ul>
</div>

<style>
	#pagesMobile {
		height: calc(100% - 73px);
		position: fixed;
		top: 73px;
		z-index: 1;
		transform: translateY(-100%);
		transition: transform 0.2s linear;
	}

	#pagesMobile.open {
		transform: translateY(0%);
	}

	.customActive {
		background-color: var(--bs-primary);
	}
</style>
