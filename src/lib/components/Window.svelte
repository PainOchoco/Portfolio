<script lang="ts">
	import { draggable } from '@neodrag/svelte';
	import collapseIcon from '$lib/assets/icons/window/collapse.svg';
	import boxIcon from '$lib/assets/icons/window/box.svg';
	import type { Component } from 'svelte';

	interface WindowsProps {
		x: number;
		y: number;
		z: number;
		onMouseDown: (e: MouseEvent) => void;
		onWindowClose: (e: MouseEvent) => void;
		title: string;
		icon: string;
		Content: Component;
	}

	let { x, y, z = 1, onMouseDown, onWindowClose, title, icon, Content }: WindowsProps = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	use:draggable={{ handle: '.window-bar', grid: [10, 10] }}
	class="window opening"
	onmousedown={onMouseDown}
	style="position: absolute; left: {x}px; top: {y}px; z-index: {z}"
>
	<div class="window-bar">
		<div class="left">
			<img src={boxIcon} alt="Close window" width="24px" height="24px" draggable="false" />
		</div>
		<div class="title">
			<img src={icon} alt="{title}'s icon" width="24px" height="24px" draggable="false" />
			<h2>{title}</h2>
		</div>
		<div class="right">
			<button class="collapse" onclick={(e) => onWindowClose(e)}>
				<img src={collapseIcon} alt="Close window" width="24px" height="24px" draggable="false" />
			</button>
		</div>
	</div>
	<div class="window-content">
		<Content />
	</div>
</div>

<style lang="scss">
	.window {
		display: flex;
		flex-direction: column;
		min-width: 240px;
		max-width: 500px;
		max-height: 500px;
		position: absolute;
		background-color: var(--tertiary-color);
		outline: 2px solid var(--text-color);
		padding: 6px;
		padding-top: 2px;
		overflow: hidden;
		box-shadow:
			2px 2px 0px 0px rgba(38, 38, 38, 0.1) inset,
			-2px -2px 0px 0px rgba(38, 38, 38, 0.4) inset;
	}

	.window-bar {
		display: flex;
		justify-content: space-between;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		gap: 0.5em;
		cursor: grab;
		div {
			padding-left: 0.5em;
			padding-right: 0.5em;
			display: flex;
			text-align: center;
			align-items: center;
			background-color: var(--tertiary-color);
		}

		.right {
			padding-right: 0;
		}

		.left {
			padding-left: 0;
		}

		.title {
			gap: 0.5em;
		}

		&:active {
			cursor: grabbing;
		}

		background: repeating-linear-gradient(#999, #999 2px, #ddd 2px, #ddd 4px);
	}

	.window-content {
		background-color: white;
		border: 2px solid var(--text-color);
		padding: 1em;
		overflow: scroll;
	}

	.collapse {
		display: flex;
		align-items: center;
	}

	@keyframes opening {
		from {
			transform: scale(0);
			opacity: 0.5;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	.opening {
		animation: opening 0.3s steps(3);
	}
</style>
