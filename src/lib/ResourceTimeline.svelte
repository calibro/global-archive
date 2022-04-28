<script>
	import { getContext, onMount } from 'svelte';
	import { cfRecords } from '$lib/stores';
	import { scaleTime } from 'd3-scale';
	import { axisTop } from 'd3-axis';
	import { select } from 'd3-selection';

	export let startYear, endYear, uncertain;

	let gAxis;
	const { width } = getContext('responsive');
	const height = 50;
	const rectHeight = 10;
	const tickSize = rectHeight * 2;
	const margin = {
		left: 12,
		right: 12,
		top: 20,
		bottom: 5
	};

	$: chartWidth = $width - margin.left - margin.right;
	const chartHeight = height - margin.top - margin.bottom;

	$: domainStartYear = $cfRecords.dims.get('Start year').bottom(1)[0]
		? $cfRecords.dims.get('Start year').bottom(1)[0]['Start year']
		: null;
	$: domainEndYear = $cfRecords.dims.get('End year').top(1)[0]
		? $cfRecords.dims.get('End year').top(1)[0]['End year']
		: null;

	$: x = scaleTime()
		.domain([new Date(domainStartYear, 0, 1), new Date(domainEndYear, 11, 31)])
		.range([0, chartWidth])
		.nice();

	// @ts-ignore
	$: timeAxis = axisTop(x).tickSizeInner(tickSize).tickSizeOuter(0).tickPadding(-5);

	onMount(() => {
		drawAxis(gAxis, timeAxis);
	});

	$: {
		if (gAxis) {
			drawAxis(gAxis, timeAxis);
		}
	}

	function drawAxis(ref, axis) {
		const axisSelection = select(ref).call(axis);
		axisSelection.selectAll('.tick line').attr('transform', `translate(0,${tickSize / 2})`);
		axisSelection.select('.domain').attr('stroke-dasharray', '3,3');
	}
</script>

<svg width={$width} {height}>
	<defs>
		<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" style="stop-color:white;stop-opacity:0.25" />
			<stop offset="50%" style="stop-color:black;stop-opacity:1" />
			<stop offset="100%" style="stop-color:white;stop-opacity:0.25" />
		</linearGradient>
	</defs>
	<g transform="translate({margin.left},{margin.top})">
		<rect
			x={x(new Date(startYear, 0, 1))}
			y="0"
			rx={rectHeight / 2}
			height={rectHeight}
			width={x(new Date(endYear, 11, 31)) - x(new Date(startYear, 0, 1))}
			fill={uncertain ? 'url(#gradient)' : 'black'}
		/>
		<g transform="translate(0,{rectHeight / 2})" bind:this={gAxis} />
	</g>
</svg>
