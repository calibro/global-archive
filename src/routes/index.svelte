<script>
	import logo from '$lib/assets/logo.svg';
</script>

<div class="w-100 h-100 d-flex flex-column">
	<div
		class="flex-grow-1 flex-shrink-1 d-flex flex-column align-items-center justify-content-center"
	>
		<h1 class="text-primary title text-center mb-5">Global Archives Online</h1>
		<a role="button" class="btn btn-primary btn-lg rounded-pill" href="/explore">Explore</a>
	</div>
	<div class="flex-grow-0 flex-shrink-0 bg-dark text-white">
		<div class="container">
			<div class="row py-3">
				<div class="col-3"><img class="img-fluid" alt="logo" src={logo} /></div>
				<div class="col-9">
					<p class="BespokeSerif my-0">
						Global Archives Online is intended as a tool to locate and use resources for historical
						research on colonial and global history from the fifteenth to the twenty-first century.
						It will provide students and researchers anywhere in the world with an overview of major
						digital collections of primary sources, including published sources, digitized archival
						material as well as “born-digital” sources.
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
