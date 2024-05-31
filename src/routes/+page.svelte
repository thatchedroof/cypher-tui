<script lang="ts">
	import { TUI } from '$lib/TUI.js';
	import { onMount, tick } from 'svelte';
	import { Svrollbar } from 'svrollbar';
	import VirtualList from 'svelte-tiny-virtual-list';
	import sanitizeHtml from 'sanitize-html';

	let tui = new TUI();
	// console.log(prevText);
	let historyText = tui.asText();
	let outputText = '';

	let virtualList: VirtualList;

	let input: HTMLSpanElement;

	let commandProcessing: boolean = false;

	let sanitizeOptions = {
		allowedTags: ['b', 'i', 'em', 'strong', 'a', 'span'],
		allowedAttributes: {
			a: ['href'],
			span: ['class', 'data-cmd']
		}
	};

	function output(text: string, newline: boolean = true) {
		outputText += text;
		if (newline) {
			outputText += '\n';
		}
	}

	function addLinks() {
		let links = document.querySelectorAll('.cmd-button');

		links.forEach((link) => {
			link.addEventListener('click', async (event) => {
				let text: string;

				if (link.hasAttribute('data-cmd')) {
					text = link.getAttribute('data-cmd') || '';
				} else {
					text = link.textContent || '';
				}

				input.textContent = text;
				inputFocus();
			});
		});
	}

	function inputFocus() {
		input.focus();
		let val = input.textContent;
		input.textContent = '';
		input.textContent = val;
	}

	const escapeHtml = (unsafe: string) => {
		return unsafe
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll("'", '&#039;');
	};

	function show(text: string) {
		text = escapeHtml(text);
		text = text.replaceAll(/\[\[\[([^|\]]*?)\]\]\]/g, '<span class="cmd-button">$1</span>');
		text = text.replaceAll(
			/\[\[\[(.*?)\|(.*?)\]\]\]/g,
			'<span class="cmd-button" data-cmd="$2">$1</span>'
		);
		text = sanitizeHtml(text, sanitizeOptions);
		return text;
	}

	const scrollToBottom = (node: Element) => {
		const scroll = () =>
			node.scroll({
				top: node.scrollHeight,
				behavior: 'smooth'
			});
		scroll();

		return { update: scroll };
	};

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
		inputFocus();

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
				inputFocus();

				outputText = '';
				await tick();
				addLinks();
			} else if (event.key === 'ArrowUp') {
				event.preventDefault();
				// input.textContent = tui.getPreviousCommand();
			} else if (event.key === 'ArrowDown') {
				event.preventDefault();
				// input.textContent = tui.getNextCommand();
			}
		});

		// document.addEventListener('click', (event) => {
		// 	inputFocus();
		// });
	});
</script>

<div class="background">
	<div class="wrapper">
		<div bind:this={viewport} class="viewport" use:scrollToBottom={outputText}>
			<div bind:this={contents} class="contents">
				{#each historyText as htext}
					<div class="item">
						<div class="text">{@html show(htext)}</div>
					</div>
				{/each}
				<div id="output" class="output text">{@html show(outputText)}</div>
			</div>
		</div>
		<Svrollbar {viewport} {contents} margin={{ top: 10, buttom: 10 }} />
	</div>

	<div class="input-and-output">
		<div class="input-line">
			<span class="text">&gt;&nbsp;</span>
			<span class="text" id="input" bind:this={input} contenteditable></span>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	:global(.cmd-button) {
		color: #10cd00;
		text-decoration: underline;
		text-decoration-thickness: 0.05em;
		text-underline-offset: 0.1em;
		cursor: pointer;
	}

	.input-and-output {
		padding: 1em;
		width: 100%;
		bottom: 0;

		/* And if you want the div to be full-width: */
		left: 0;
		right: 0;

		border-top: 1px solid #10cd00;

		background: rgba(20, 20, 20, 0.5);

		backdrop-filter: blur(6px);
	}

	.wrapper {
		--svrollbar-track-width: 20px;
		--svrollbar-track-background: #85b4b9;
		--svrollbar-track-opacity: 0;

		--svrollbar-thumb-width: 5px;
		--svrollbar-thumb-background: #10cd00;
		--svrollbar-thumb-opacity: 0.8;
		--svrollbar-thumb-radius: 0;
		--svrollbar-track-radius: 0;
		--svrollbar-thumb-shadow: 0px 0px 0px rgba(20, 255, 0, 0.48);

		position: relative;
		width: 100vw;

		grid-row-start: 1;
	}

	.viewport {
		position: relative;
		overflow: scroll;
		/* border: 1px solid gray; */
		box-sizing: border-box;

		width: 100%;
		height: calc(100vh - 3em);
		white-space: nowrap;

		/* hide scrollbar */
		-ms-overflow-style: none;
		scrollbar-width: none;

		padding: 1em;
		grid-row-start: 1;
	}

	.viewport::-webkit-scrollbar {
		/* hide scrollbar */
		display: none;
	}

	.background {
		/* overflow-y: scroll; */
		position: relative;
		width: 100vw;
		height: 100vh;
		font-size: 24px;

		background: radial-gradient(50% 50% at 50% 50%, #101e0f 0%, #0b1909 61.5%, #070f06 100%);

		display: grid;
		grid-template-rows: 1fr auto;
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
		/* color: #87ad84; */

		text-shadow: 0px 0px 4.2px rgba(20, 255, 0, 0.48);
	}

	.input-line {
		display: flex;
		justify-content: flex-start;
		grid-row-start: 2;
	}

	#input {
		outline: none;
		flex-grow: 1;

		text-wrap: wrap;
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
