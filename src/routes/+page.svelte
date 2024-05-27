<script lang="ts">
	import { TUI } from '$lib/TUI.js';
	import { onMount, tick } from 'svelte';
	import { Svrollbar } from 'svrollbar';
	import VirtualList from 'svelte-tiny-virtual-list';

	let tui = new TUI();
	// console.log(prevText);
	let historyText = tui.asText();
	let outputText = '';

	let virtualList: VirtualList;

	let input: HTMLSpanElement;

	let commandProcessing: boolean = false;

	function output(text: string, newline: boolean = true) {
		outputText += text;
		if (newline) {
			outputText += '\n';
		}
	}

	let viewport: Element;
	let contents: Element;

	let scrollToIndex: number | undefined = undefined;

	function heightFunction(index: number) {
		if (index === historyText.length) {
			let lines = outputText.split('\n').length - 1;

			return lines * 24;
		}

		let text = historyText[index];

		let lines = text.split('\n').length - 1;

		return lines * 24;
	}

	function totalHeight() {
		let total = 0;

		for (let i = 0; i < historyText.length + 1; i++) {
			total += heightFunction(i);
		}

		return total;
	}

	onMount(() => {
		viewport = document.querySelector('.virtual-list-wrapper')!;
		contents = document.querySelector('.virtual-list-inner')!;

		input.focus();

		document.addEventListener('keydown', async (event) => {
			if (event.key === 'Enter') {
				event.preventDefault();

				let command = input?.textContent || '';

				commandProcessing = true;
				await tick();

				historyText = tui.asText().concat(['> ' + command + '\n']);

				console.log(historyText);
				await tui.runCommand(command, output);

				commandProcessing = false;
				await tick();

				historyText = tui.asText();

				input.textContent = '';
				input.focus();

				outputText = '';
				virtualList.recomputeSizes(0);

				await tick();
				scrollToIndex = historyText.length > 2 ? historyText.length - 2 : undefined;
				console.log(scrollToIndex);
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
	<div class="wrapper">
		<VirtualList
			bind:this={virtualList}
			width="100vw"
			height="100vh"
			itemCount={historyText.length + (commandProcessing ? 1 : 0)}
			itemSize={heightFunction}
			overscanCount={10}
			{scrollToIndex}
			scrollToAlignment="end"
		>
			<div slot="item" let:index let:style {style}>
				{#if index === historyText.length}
					<div class="output text">{outputText}</div>
				{:else}
					<div class="text">{historyText[index]}</div>
				{/if}
			</div>
		</VirtualList>
		<Svrollbar {viewport} {contents} initiallyVisible alwaysVisible />
	</div>

	<div class="input-and-output">
		{#if !commandProcessing}
			<div class="input-line">
				<span class="text">&gt;&nbsp;</span>
				<span class="text" id="input" bind:this={input} contenteditable></span>
			</div>
		{/if}
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	:global(.virtual-list-wrapper) {
		/* hide scrollbar */
		-ms-overflow-style: none !important;
		scrollbar-width: none !important;
	}

	:global(.virtual-list-wrapper::-webkit-scrollbar) {
		/* hide scrollbar */
		display: none !important;
	}

	.input-and-output {
		padding: 1em;
		width: 100%;
		position: fixed;
		bottom: 0;

		/* And if you want the div to be full-width: */
		left: 0;
		right: 0;
	}

	.wrapper {
		--svrollbar-track-width: 20px;
		--svrollbar-track-background: #85b4b9;
		--svrollbar-track-opacity: 1;

		--svrollbar-thumb-width: 10px;
		--svrollbar-thumb-background: #d9ab55;
		--svrollbar-thumb-opacity: 1;

		position: relative;
		width: 100vw;
		padding: 1em;
	}

	.background {
		/* overflow-y: scroll; */
		position: relative;
		width: 100vw;
		height: 100vh;
		font-size: 24px;

		background: radial-gradient(50% 50% at 50% 50%, #101e0f 0%, #0b1909 61.5%, #070f06 100%);
	}

	.text {
		font-family: 'Fixedsys Excelsior';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		line-height: 24px;
		white-space: pre-line;
		text-wrap: wrap;

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
