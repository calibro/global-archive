<script>
	import { fade } from 'svelte/transition';
</script>

<div
	class="position-fixed top-0 bottom-0 start-0 end-0 bg-primary d-flex align-items-center justify-content-center"
	style="z-index:1021;"
	transition:fade
>
	<div class="text-dark" role="status">
		<i class="bi bi-globe fs-1 pulse" />
		<span class="visually-hidden">Loading...</span>
	</div>
</div>

<style>
	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.pulse {
		opacity: 1;
		animation: pulse 3s ease-in-out infinite;
	}
</style>
