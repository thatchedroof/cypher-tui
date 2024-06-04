import { get, writable } from 'svelte/store';

export const data = writable({
	editMode: false,
	editContent: '',
	editFilePath: ''
});
