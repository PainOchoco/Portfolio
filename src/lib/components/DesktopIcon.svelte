<script lang="ts">
	import type { Component } from 'svelte';

	interface DesktopIconProps {
		name: string;
		icon: string;
		content: any;
		onClickOrDblClick: (e: MouseEvent, name: string, icon: string, content: any) => void;
	}

	let { name, icon, content = null, onClickOrDblClick }: DesktopIconProps = $props();
</script>

<button
	onclick={(e) => {
		// if its a touch device, open the app on tap
		if (matchMedia('(hover: none)').matches) {
			onClickOrDblClick(e, name, icon, content);
		}
	}}
	ondblclick={(e) => onClickOrDblClick(e, name, icon, content)}
>
	<div class="desktop-icon filled">
		<img src={icon} alt={name} width="56px" />
		<p>{name}</p>
	</div>
</button>

<style lang="scss">
	.desktop-icon {
		width: 120px;
		height: 120px;
		text-align: center;
	}

	.filled {
		img {
			image-rendering: pixelated;
		}

		p {
			background-color: rgba(255, 255, 255, 0.6);
		}
		&:hover {
			img {
				filter: brightness(0.7);
			}

			p {
				background-color: var(--text-color);
				color: var(--primary-color);
			}
		}
	}
</style>
