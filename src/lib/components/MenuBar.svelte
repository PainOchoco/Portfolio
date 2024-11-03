<script lang="ts">
	import appleLogo from '$lib/assets/icons/apple-logo.png';
	import Clock from './Clock.svelte';
</script>

<div class="menubar">
	<div class="menu-section left">
		<img src={appleLogo} alt="Apple's logo" width="20px" />
		<button class="hide-mobile">
			<h2>File</h2>
		</button>
		<button class="hide-mobile">
			<h2>Edit</h2>
		</button>
		<button class="hide-mobile">
			<h2>View</h2>
		</button>
	</div>

	<div class="menu-section right">
		<h2>Matteo Planchet's Portfolio</h2>
		<div class="hide-mobile">
			<Clock />
		</div>
	</div>
</div>

<style lang="scss">
	.menubar {
		width: 100%;
		position: absolute;
		top: 0;
		display: flex;
		padding: 0.3em;
		background-color: var(--primary-color);
		box-sizing: border-box;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		box-shadow: 0 2px 0 black;

		button {
			padding: 0 0.5rem;

			&:hover {
				background-color: var(--accent-color);
				h2 {
					color: var(--primary-color);
				}
			}
		}
	}

	.menu-section {
		display: flex;
		flex-direction: row;
		white-space: nowrap;
		align-items: center;
		gap: 1rem;
	}

	.left {
		margin-left: 1em;
		justify-content: flex-start;
	}

	.right {
		margin-right: 1em;
		justify-content: flex-end;
		width: 100%;
	}
</style>
