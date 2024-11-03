<script>
	import Desktop from '$lib/components/Desktop.svelte';
	import MenuBar from '$lib/components/MenuBar.svelte';
	import '$lib/style/index.css';
</script>

<div class="main">
	<MenuBar />
	<Desktop />
</div>

<style>
	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100%;
		padding-top: 4em;
		background-image: url('$lib/assets/background.png');
		background-size: cover;
		font-family: 'Charcoal';
	}
</style>
