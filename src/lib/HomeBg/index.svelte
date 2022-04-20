<script>
	// @ts-nocheck

	import { getContext } from 'svelte';
	import { feature } from 'topojson-client';
	import { geoPath, geoGraticule10, geoAzimuthalEquidistant } from 'd3-geo';
	import { Canvas, Layer, t } from 'svelte-canvas';
	import world from './world.json';

	const { width, height } = getContext('responsive');

	$: cWidth = $width;
	$: cHeight = $height;

	const projection = geoAzimuthalEquidistant();
	const projectionInverted = geoAzimuthalEquidistant();

	const path = geoPath().projection(projection);
	const pathInverted = geoPath().projection(projectionInverted);

	const topoData = feature(world, world.objects.land);

	$: graticule = ({ context, width, height }) => {
		projection.fitSize([width, height], { type: 'Sphere' }).translate([cWidth / 2, cHeight / 2]);

		projectionInverted
			.fitSize([width, height], { type: 'Sphere' })
			.translate([cWidth / 2, cHeight / 2]);

		context.strokeStyle = 'rgba(256,256,256,0.3)';
		context.beginPath(), path(geoGraticule10()), context.stroke();
	};

	$: globe = ({ context }) => {
		projection.rotate([$t / 500, -90]);
		context.fillStyle = 'gray';
		context.beginPath(), path(topoData), context.fill();
	};

	$: globeInverted = ({ context }) => {
		context.fillStyle = 'gray';
		projectionInverted.rotate([$t / 500 - 360, 90]);
		context.beginPath(), pathInverted(topoData), context.fill();
	};
</script>

<Canvas width={$width} height={$width * 2}>
	<Layer render={globeInverted} />
	<Layer render={globe} />
	<Layer
		setup={({ context }) => {
			path.context(context);
			pathInverted.context(context);
		}}
		render={graticule}
	/>
</Canvas>
