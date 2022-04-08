export const toggleElement = (elm, arr = []) => {
	if (!arr || !elm) return;
	const index = arr.findIndex((x) => x.id === elm.id);
	index === -1 ? arr.push(elm) : arr.splice(index, 1);
	return arr;
};

export const ATTRIBS = [
	{ key: 'Keywords', multiple: true, group: true, table_name: 'Keywords' },
	{ key: 'Main language of collection', multiple: true, group: true, table_name: 'Language' },
	{ key: 'Region concerned', multiple: true, group: true, table_name: 'Region concerned' },
	{ key: 'State/Nation', multiple: true, group: true, table_name: 'State/Nation' },
	{ key: 'Type of sources', multiple: true, group: true, table_name: 'Type of sources' },
	{ key: 'Host institution', multiple: true, group: true, table_name: 'Host institution' },
	{ key: 'Brief description of collection', multiple: false, group: false },
	{ key: 'Start year', multiple: false, group: false },
	{ key: 'End year', multiple: false, group: false }
];

export const METADATA = [
	'Host institution',
	'Keywords',
	'Main language of collection',
	'Type of sources',
	'State/Nation'
];
