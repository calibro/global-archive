<script>
	import { base } from '$app/paths';
	import logo from '$lib/assets/logo.svg';
</script>

<div class="w-100 h-100 d-flex flex-column">
	<div
		class="flex-grow-1 flex-shrink-1 d-flex flex-column align-items-center justify-content-center"
	>
		<h1 class="text-primary title text-center mb-5">Global Archives Online</h1>
		<a role="button" class="btn btn-primary btn-lg rounded-pill" href={`${base}/explore`}>Explore</a
		>
	</div>
	<div class="flex-grow-0 flex-shrink-0 bg-dark text-white">
		<div class="container">
			<div class="row py-3">
				<div class="col-3"><img class="img-fluid" alt="logo" src={logo} /></div>
				<div class="col-9">
					<p class="BespokeSerif my-0">
						A directory of open digital collections for the study of colonial and global history.
						Global Archives Online is designed to identify and locate open resources for the study
						of and research on colonial and global history. Aimed primarily at students and
						researchers interested in imperial, colonial and global history, the directory provides
						users anywhere in the world with an overview of major digital collections of a variety
						of primary sources, including digitized manuscripts, newspapers, books, pamphlets, maps,
						images and audio-visual material.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.title {
		font-size: 13rem;
		line-height: 86%;
		font-variation-settings: 'wght' 600;
	}
</style>
