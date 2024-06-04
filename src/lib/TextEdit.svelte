<script lang="ts">
	import { data } from './store';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { TUI } from '$lib/TUI.js';

	let viewport: HTMLDivElement;
	let contents: HTMLDivElement;

	export let tui: TUI;

	let text: string = $data.editContent;

	$: $data.editContent = text;

	console.log('test');
</script>

<div class="background">
	<textarea class="text" placeholder="(Type here...)" bind:value={text} />
	<div class="text-bottom"></div>
</div>

<div class="exit text">
	<button
		on:click={() => {
			$data.editContent = text;
			tui.saveEdits();
		}}>☓</button
	>
</div>

<style>
	textarea {
		width: 100%;
		min-height: 100vh;
		font-size: 1em;
		box-sizing: border-box;
		padding: 3.5em;

		background: none;
		border: none;
		color: #10cd00;
		font-family: 'Fixedsys Excelsior';
		font-size: 1em;

		/* hide scrollbar */
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.text-bottom {
		top: calc(-3em);
		height: 3em;
		border-top: #10cd0080;
		border-style: solid;
		border-width: 2px;
	}

	textarea::-webkit-scrollbar {
		/* hide scrollbar */
		display: none;
	}

	textarea::placeholder {
		color: #10cd00;
		opacity: 0.5;
	}

	/* textarea:focus::placeholder {
		opacity: 0;
	} */

	.exit {
		position: fixed;
		top: 0em;
		left: 0;
		padding: 1.1em;
	}

	button {
		background: none;
		border: none;
		background-color: #10cd00;
		color: #070f06;
		font-family: 'Fixedsys Excelsior';
		font-size: 1.5em;
		height: 1em;
		width: 0.95em;
		line-height: 0.4em;

		box-shadow: 0px 0px 4.2px rgba(20, 255, 0, 0.48);

		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	button:hover {
		background-color: #070f06;
		color: #10cd00;
		box-shadow: none;
		text-shadow: 0px 0px 4.2px rgba(20, 255, 0, 0.48);
	}

	/* button:active {
		background-color: #10cd00;
		color: #070f06;
		box-shadow: none;
		text-shadow: 0px 0px 4.2px rgba(20, 255, 0, 0.48);
	} */

	.viewport {
		position: relative;
		overflow: scroll;

		width: 100%;
		height: calc(100vh - 3em);

		/* hide scrollbar */
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.viewport::-webkit-scrollbar {
		/* hide scrollbar */
		display: none;
	}

	.background {
		--svrollbar-track-width: 20px;
		--svrollbar-track-background: #85b4b9;
		--svrollbar-track-opacity: 0;

		--svrollbar-thumb-width: 5px;
		--svrollbar-thumb-background: #10cd00;
		--svrollbar-thumb-opacity: 0.8;
		--svrollbar-thumb-radius: 0;
		--svrollbar-track-radius: 0;
		--svrollbar-thumb-shadow: 0px 0px 0px rgba(20, 255, 0, 0.48);
	}
</style>
