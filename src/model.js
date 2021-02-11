import image from './assets/image.png';
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from './classes/blocks';

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus dignissim tincidunt. Vivamus accumsan quam vitae risus vehicula, ornare ullamcorper nulla pellentesque. Mauris pellentesque massa sit amet mi fermentum malesuada. Nunc ut ligula mi. Phasellus fermentum eros eu purus faucibus pellentesque ut eget erat. Duis dapibus diam dui, pharetra ullamcorper.
`;

export const model = [
	new TitleBlock('Generator titles and paragraphs', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#fff',
			padding: '1.5rem',
			'text-align': 'center',
		},
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center',
		},
		imageStyles: {
			width: '500px',
			height: 'auto',
		},
		alt: 'image',
	}),
	new ColumnsBlock(
		[
			'eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla',
			'eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla',
			'eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla',
		],
		{
			styles: {
				background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
				padding: '2rem',
				color: '#fff',
				'font-weight': 'bold',
			},
		},
	),
	new TextBlock(text, {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight': 'bold',
		},
	}),
];
