import Vibrant from 'node-vibrant/lib/browser.js';

export const ATTRIBS = [
	{ key: 'Start year', multiple: false, group: false },
	{ key: 'End year', multiple: false, group: false },
	{ key: 'Region concerned', multiple: true, group: true, table_name: 'Region concerned' },
	{ key: 'State/Nation', multiple: true, group: true, table_name: 'State/Nation' },
	{ key: 'Organisation', multiple: true, group: true, table_name: 'Organisation' },
	{ key: 'Host institution', multiple: true, group: true, table_name: 'Host institution' },
	{ key: 'Keywords', multiple: true, group: true, table_name: 'Keywords' },
	{ key: 'Type of sources', multiple: true, group: true, table_name: 'Type of sources' },
	{ key: 'Main language of collection', multiple: true, group: true, table_name: 'Language' },
	{ key: 'Brief description of collection', multiple: false, group: false }
];

export const METADATA = [
	'State/Nation',
	'Organisation',
	'Host institution',
	'Keywords',
	'Type of sources',
	'Main language of collection'
];

export const HEADERS = [
	{ label: 'Name of collection', multiple: false },
	{ label: 'Host institution', multiple: true }
];

export const toggleElement = (elm, arr = []) => {
	if (!arr || !elm) return;
	const index = arr.findIndex((x) => x.id === elm.id);
	index === -1 ? arr.push(elm) : arr.splice(index, 1);
	return arr;
};

export async function getVibrantColor(url) {
	if (!url) return;

	//const palette = await Vibrant.from(url).getPalette();
	let v = new Vibrant(url);
	const palette = await v.getPalette();
	return palette['Vibrant'].getHex();
}
