<script lang="ts">
	let date = new Date();
	let hours = $state(date.getHours() % 12);
	let minutes = $state(date.getMinutes());
	let ampm = $state(date.getHours() >= 12 ? 'PM' : 'AM');

	const addZero = (num: number) => (num < 10 ? '0' + num : num);

	$effect(() => {
		const interval = setInterval(() => {
			date = new Date();
			hours = date.getHours() % 12;
			minutes = date.getMinutes();
			ampm = date.getHours() >= 12 ? 'PM' : 'AM';
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<h2>{addZero(hours)}:{addZero(minutes)} {ampm}</h2>
