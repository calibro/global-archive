<script>
	import { getContext } from 'svelte';
	import { feature } from 'topojson-client';
	import { geoPath, geoGraticule10 } from 'd3-geo';
	import { geoPeirceQuincuncial, geoWinkel3 } from 'd3-geo-projection';
	import { csvParse } from 'd3-dsv';
	import countries from './countries.json';
	import oceans from './oceans.csv?raw';

	export let regions_concerned = [];
	const { width, height } = getContext('responsive');
	$: mHeight = $width < 500 ? $width : 500;

	$: projection = geoWinkel3().fitSize([$width, mHeight], { type: 'Sphere' }); //.precision(0.1);

	$: path = geoPath().projection(projection);

	const topoData = feature(countries, 'collection');
	const data = topoData.features;
	const oceansData = csvParse(oceans);
	const outline = { type: 'Sphere' };
	const graticule = geoGraticule10();
</script>

<svg width={$width} height={mHeight}>
	<defs>
		<path id="outline" d={path(outline)} />
		<clipPath id="clip"><use xlink:href="#outline" /></clipPath>
	</defs>
	<g clip-path="url(#clip)">
		<use xlink:href="#outline" fill="#fff" />
		<path d={path(graticule)} fill="none" stroke="#ccc" />
		{#each data as feature}
			<path
				d={path(feature)}
				class="borderc"
				fill={regions_concerned.includes(feature.properties.regions_concerned)
					? '#FFE000'
					: 'black'}
			/>
		{/each}
		{#each oceansData as ocean}
			{#if regions_concerned.includes(ocean.name)}
				<text
					class="label"
					text-anchor="middle"
					transform="translate({projection([+ocean.longitude, +ocean.latitude]) + ''})"
					dy="0.35em">{ocean.name}</text
				>
			{/if}
		{/each}
	</g>
	<use xlink:href="#outline" fill="none" stroke="#000" />
</svg>

<style>
	.label {
		font-size: 0.6rem;
		paint-order: stroke;
		stroke-linejoin: round;
		paint-order: stroke;
		stroke: white;
		stroke-width: 2px;
	}
</style>
