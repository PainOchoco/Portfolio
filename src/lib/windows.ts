import scriptEditorIcon from '$lib/assets/icons/desktop/script-editor.png';
import folderBandIcon from '$lib/assets/icons/desktop/folder-band.png';
import folderEarthIcon from '$lib/assets/icons/desktop/folder-earth.png';
import folderUtilitiesIcon from '$lib/assets/icons/desktop/folder-utilities.png';
import folderExtrasIcon from '$lib/assets/icons/desktop/folder-extras.png';
import folderApple from '$lib/assets/icons/desktop/folder-apple.png';
import folderAssistantIcon from '$lib/assets/icons/desktop/folder-assistant.png';
import photoshopIcon from '$lib/assets/icons/desktop/photoshop.png';

import Sport from '$lib/content/Sport.svelte';
import Projects from './content/Projects.svelte';
import CivicEngagement from '$lib/content/CivicEngagement.svelte';
import InternationalMobility from '$lib/content/InternationalMobility.svelte';
import CareerDevelopment from '$lib/content/CareerDevelopment.svelte';
import EngineeringCourse from '$lib/content/EngineeringCourse.svelte';
import Welcome from '$lib/content/Welcome.svelte';
import Photo from '$lib/content/Photo.svelte';

const icons = [
	{ name: 'Welcome', icon: scriptEditorIcon, content: Welcome },
	{ name: 'Engineering course', icon: folderBandIcon, content: EngineeringCourse },
	{
		name: 'International mobility',
		icon: folderEarthIcon,
		content: InternationalMobility
	},
	{ name: 'Civic engagement', icon: folderUtilitiesIcon, content: CivicEngagement },
	{ name: 'Sport', icon: folderApple, content: Sport },
	{ name: 'Projects', icon: folderExtrasIcon, content: Projects },
	{ name: 'Career development', icon: folderAssistantIcon, content: CareerDevelopment },
	{ name: 'matteo.png', icon: photoshopIcon, content: Photo }
];

export default icons;
