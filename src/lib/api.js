// import { base } from '$lib/utils';
const BASE_URL = 'https://api.airtable.com/v0';
const BASE_ID = 'appH8M1k9MeD4OVtz';

export async function fetchTable(table, select = {}, offset) {
	if (!table) return;
	if (offset) {
		select.offset = offset;
	}
	const url = `${BASE_URL}/${BASE_ID}/${encodeURIComponent(table)}?` + new URLSearchParams(select);

	const res = await fetch(url, {
		method: 'get',
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`
		}
	});

	const json = await res.json();

	if (res.ok) {
		if (json.offset) {
			return [...json.records, ...(await fetchTable(table, select, json.offset))];
		} else {
			return json.records;
		}
	} else {
		throw new Error(json);
	}
}

export async function fetchResource(id) {
	if (!id) return;

	const url = `${BASE_URL}/${BASE_ID}/${encodeURIComponent('GAO final')}/${id}`;

	const res = await fetch(url, {
		method: 'get',
		headers: {
			Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`
		}
	});

	const json = await res.json();

	if (res.ok) {
		return json;
	} else {
		throw new Error(res.statusText);
	}
}
