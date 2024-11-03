<script>
	import DesktopIcon from '$lib/components/DesktopIcon.svelte';
	import PdfIcon from '$lib/assets/icons/desktop/pdf.png';
	import d from '$lib/data';
</script>

<h1>Career development</h1>

<ul>
	<li>
		<a href={d.linkedinLink} target="_blank">My LinkedIn</a>
		<p>Let's connect!</p>
	</li>
	<li>
		<a href={d.githubLink} target="_blank">My GitHub</a>
		<p>Many open source project I made or contributed to can be found on my profile.</p>
	</li>
	<li>
		<a href="mailto:{d.mail}" target="_blank">Contact me!</a>
		<p>matteo.planchet@toulouse-inp.fr</p>
	</li>
</ul>

<br />

<p>Right below you can find my CV in English and French.</p>

<br />

<DesktopIcon
	name="English CV"
	icon={PdfIcon}
	content={null}
	onClickOrDblClick={() => {
		window.open('/cv_en.pdf', '_blank');
	}}
/>
<DesktopIcon
	name="French CV"
	icon={PdfIcon}
	content={null}
	onClickOrDblClick={() => {
		window.open('/cv_fr.pdf', '_blank');
	}}
/>

<br />

<p>And here is my "Tell me about yourself" video!</p>

<br />

<iframe
	width="400"
	height="315"
	src={d.youtubeEmbedVideoLink}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
></iframe>
