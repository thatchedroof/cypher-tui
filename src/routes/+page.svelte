<script lang="ts">
	import { TUI } from '$lib/TUI.js';
	import { onMount, tick } from 'svelte';

	let tui = new TUI();
	// console.log(prevText);
	let historyText = tui.asText();
	let outputText = '';

	let input: HTMLSpanElement;

	let commandProcessing: boolean = false;

	function output(text: string, newline: boolean = true) {
		outputText += text;
		if (newline) {
			outputText += '\n';
		}
	}

	onMount(() => {
		input.focus();

		document.addEventListener('keydown', async (event) => {
			if (event.key === 'Enter') {
				event.preventDefault();

				let command = input?.textContent || '';

				commandProcessing = true;
				await tick();

				historyText = tui.asText() + '> ' + command + '\n';

				console.log(historyText);
				await tui.runCommand(command, output);

				commandProcessing = false;
				await tick();

				historyText = tui.asText();

				input.textContent = '';
				input.focus();

				outputText = '';
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				// input.textContent = tui.getPreviousCommand();
			} else if (event.key === 'ArrowDown') {
				event.preventDefault();
				// input.textContent = tui.getNextCommand();
			}
		});

		// document.addEventListener('click', (event) => {
		// 	input.focus();
		// });
	});
</script>

<div class="background">
	<div class="text">{historyText}</div>
	{#if !commandProcessing}
		<div class="input-line">
			<span class="text">&gt;&nbsp;</span>
			<span class="text" id="input" bind:this={input} contenteditable></span>
		</div>
	{/if}
	<div class="output text">{outputText}</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	.background {
		overflow-y: scroll;
		position: relative;
		width: 100vw;
		height: 100vh;
		font-size: 24px;

		background: radial-gradient(50% 50% at 50% 50%, #101e0f 0%, #0b1909 61.5%, #070f06 100%);
		padding: 1em;
	}

	.text {
		font-family: 'Fixedsys Excelsior';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 24px;
		white-space: pre-line;

		color: #10cd00;

		text-shadow: 0px 0px 4.2px rgba(20, 255, 0, 0.48);
	}

	.input-line {
		display: flex;
		justify-content: flex-start;
	}

	#input {
		outline: none;
		flex-grow: 1;
	}

	::selection {
		background-color: #10cd00;
		color: #101e0f;
	}

	::-webkit-selection {
		background-color: #10cd00;
		color: #101e0f;
	}

	::-moz-selection {
		background-color: #10cd00;
		color: #101e0f;
	}

	.blink {
		/* animation: blink-animation 1.5s steps(1) infinite; */
	}

	@keyframes blink-animation {
		50% {
			opacity: 0;
		}
	}
</style>
