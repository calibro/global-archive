<script>
	import { getContext } from 'svelte';
	import { feature } from 'topojson-client';
	import { geoPath } from 'd3-geo';
	import { geoPeirceQuincuncial } from 'd3-geo-projection';
	import { csvParse } from 'd3-dsv';
	import countries from './countries.json';
	import oceans from './oceans.csv?raw';

	export let regions_concerned = [];
	const { width, height } = getContext('responsive');
	$: mHeight = $width < 500 ? $width : 500;

	$: projection = geoPeirceQuincuncial()
		.fitSize([$width, mHeight], { type: 'Sphere' })
		.precision(0.1);

	$: path = geoPath().projection(projection);

	const topoData = feature(countries, 'collection');
	const land = {
		...topoData,
		features: topoData.features.filter((d) => d.properties.ISO_A3 !== 'ATA')
	};

	const data = land.features;

	const oceansData = csvParse(oceans);
	console.log(oceansData, regions_concerned);
</script>

<svg width={$width} height={mHeight}>
	{#each data as feature}
		<path
			d={path(feature)}
			class="borderc"
			fill={regions_concerned.includes(feature.properties.regions_concerned) ? '#FFE000' : 'black'}
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
