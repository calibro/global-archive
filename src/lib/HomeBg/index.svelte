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

	const path = geoPath().projection(projection);

	const topoData = feature(world, world.objects.land);

	$: graticule = ({ context, width, height }) => {
		projection
			.fitSize([width, height], { type: 'Sphere' })
			.rotate([0, -90])
			.translate([cWidth / 2, cHeight / 2])
			.precision(0.1);

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
		projection.rotate([$t / 500 - 360, 90]);
		context.beginPath(), path(topoData), context.fill();
	};
</script>

<Canvas width={$width} height={$width * 2}>
	<Layer render={globeInverted} />
	<Layer render={globe} />
	<Layer setup={({ context }) => path.context(context)} render={graticule} />
</Canvas>
