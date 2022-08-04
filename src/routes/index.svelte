<script>
	import Responsive from '$lib/Responsive.svelte';
	import HomeBg from '$lib/HomeBg/index.svelte';
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.svg';
</script>

<div class="w-100 h-100 d-flex flex-column">
	<div
		class="py-5 py-md-0 flex-grow-1 flex-shrink-1 d-flex flex-column align-items-center justify-content-center position-relative"
	>
		<div
			class="position-absolute top-0 left-0 w-100 h-100 overflow-hidden bg-dark d-block"
			style={'z-index:0'}
		>
			<Responsive>
				<HomeBg />
			</Responsive>
		</div>
		<h1 class="text-primary title text-center mb-3" style={'z-index:1'}>
			Global<br />Archives<br />Online
		</h1>
		<a
			role="button"
			class="btn btn-primary btn-lg rounded-pill"
			style={'z-index:1'}
			href={`${base}/explore`}>Explore</a
		>
	</div>
	<div class="flex-grow-0 flex-shrink-0 bg-dark text-white">
		<div class="container">
			<div class="row py-3">
				<div class="col-8 offset-2 offset-md-0 col-md-3">
					<img class="img-fluid" alt="logo" src={logo} />
				</div>
				<div class="col-12 col-md-9">
					<p class="BespokeSerif my-3 my-md-0 desc">
						A directory of open digital collections for the study of colonial and global history.
						Global Archives Online is designed to identify and locate open resources for the study
						of and research on colonial and global history. Aimed primarily at students and
						researchers interested in imperial, colonial, and global history, the directory gives
						users around the world an overview of major digital collections containing a variety of
						primary sources, including digitised manuscripts, newspapers, books, pamphlets, maps,
						images, and audio-visual material.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.title {
		font-size: 4.5rem;
		line-height: 95%;
		font-variation-settings: 'wght' 600;
	}

	.desc {
		column-count: 1;
	}

	@media (min-width: 768px) {
		.title {
			font-size: 10rem;
			line-height: 86%;
		}

		.desc {
			column-count: 2;
		}
	}
</style>
