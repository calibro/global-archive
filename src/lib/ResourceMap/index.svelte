<script>
	import { getContext } from 'svelte';
	import { feature } from 'topojson-client';
	import { geoPath } from 'd3-geo';
	import { geoPeirceQuincuncial } from 'd3-geo-projection';
	import countries from './countries.json';

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
</script>

<svg width={$width} height={mHeight}>
	{#each data as feature}
		<path
			d={path(feature)}
			class="borderc"
			fill={regions_concerned.includes(feature.properties.regions_concerned) ? '#FFE000' : 'black'}
		/>
	{/each}
</svg>
