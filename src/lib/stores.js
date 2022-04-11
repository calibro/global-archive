import { writable, derived } from 'svelte/store';
import { localStorageStore } from '@babichjacob/svelte-localstorage/browser';
import crossfilter from 'crossfilter2';
import { ATTRIBS } from './utils';

export const records = writable([]);
export const host_institutions = writable([]);
export const region_concerned = writable([]);
export const state_nation = writable([]);
export const groupsDict = writable({});
export const active_filters = writable({});
export const view = writable('grid');
export const showFilters = writable(true);
export const bookmarks = localStorageStore('gao_bookmarks', []);

export const cfRecords = derived(records, ($records, set) => {
	const flatRecords = $records.map((d) => {
		return { id: d.id, ...d.fields };
	});
	const cs = crossfilter(flatRecords);

	// @ts-ignore
	cs.dims = new Map();
	// @ts-ignore
	cs.groups = new Map();

	for (let a of ATTRIBS) {
		const dim = cs.dimension(function (d) {
			if (d[a.key]) {
				return d[a.key];
			} else {
				return a.multiple ? [] : null;
			}
		}, a.multiple || false);
		// @ts-ignore
		cs.dims.set(a.key, dim);

		if (a.group) {
			// @ts-ignore
			cs.groups.set(a.key, dim.group());
		}
	}
	return set(cs);
});
