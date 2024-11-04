<script lang="ts">
	import Window from './Window.svelte';
	import icons from '$lib/windows';
	import DesktopIcon from './DesktopIcon.svelte';
	import type { Component } from 'svelte';

	let openedWindows: {
		x: number;
		y: number;
		z: number;
		name: string;
		icon: string;
		content: Component;
	}[] = $state([]);

	const gridGap = 20 - 2.8;
	const gridElementSize = 120 + gridGap;
	const gridPadding = 20;

	let gridContainer: HTMLDivElement;
	let columns = $state(1);
	let placeholders = $state(0);

	const updateGrid = () => {
		columns = Math.floor((gridContainer.clientWidth - 2 * gridPadding) / gridElementSize);
		placeholders = columns - icons.length;
	};

	$effect(() => {
		updateGrid();

		let welcomeIcon = icons.filter((icon) => icon.name === 'Welcome')[0];
		let matteoIcon = icons.filter((icon) => icon.name === 'matteo.png')[0];

		let windowWidth = window.innerWidth;
		let windowHeight = window.innerHeight;

		setTimeout(() => {
			// Open welcome and matteo.png
			openApp(
				new MouseEvent('click', { clientX: windowWidth * (1 / 6), clientY: windowHeight / 4 }),
				welcomeIcon.name,
				welcomeIcon.icon,
				welcomeIcon.content
			);

			openApp(
				new MouseEvent('click', { clientX: windowWidth * (3 / 6), clientY: windowHeight / 4 }),
				matteoIcon.name,
				matteoIcon.icon,
				matteoIcon.content
			);
		}, 500);
	});

	let highestZIndex = 1;

	const windowQueue: string[] = [];

	const openApp = (event: MouseEvent, name: string, icon: string, content: any) => {
		if (openedWindows.some((window) => window.name === name)) {
			closeApp(name);
		}
		if (windowQueue.includes(name)) {
			return;
		}

		windowQueue.push(name);

		highestZIndex += 1;
		// Timeout needed because if the window was already opened, the dragging position is not reset
		setTimeout(() => {
			openedWindows.push({
				x: event.clientX,
				y: event.clientY,
				z: highestZIndex,
				name,
				icon,
				content
			});
			windowQueue.shift();
		}, 1);
	};

	const closeApp = (name: string) => {
		openedWindows = openedWindows.filter((window) => window.name !== name);
	};

	const bringToFront = (event: Event) => {
		highestZIndex += 1;
		if (event.currentTarget) {
			(event.currentTarget as HTMLElement).style.zIndex = highestZIndex.toString();
		}
	};
</script>

<svelte:window on:resize={updateGrid} />

<div bind:this={gridContainer} class="desktop">
	<div class="grid">
		<!-- Icons -->
		{#each icons as { name, icon, content }}
			<DesktopIcon {name} {icon} {content} onClickOrDblClick={openApp} />
		{/each}

		<!-- Placeholders -->
		{#each Array(placeholders) as _}
			<div class="placeholder"></div>
		{/each}

		<!-- Opened windows -->
		{#each openedWindows as { x, y, z, name: title, icon, content: Content }, i}
			<Window
				{x}
				{y}
				{z}
				{title}
				{icon}
				{Content}
				onMouseDown={bringToFront}
				onWindowClose={() => closeApp(title)}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.desktop {
		display: block;
		width: 100%;
		height: 100%;
	}

	.placeholder {
		width: 120px;
		height: 120px;
	}

	.grid {
		display: grid;
		gap: 20px;
		padding: 20px;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		justify-items: center;
	}
</style>
