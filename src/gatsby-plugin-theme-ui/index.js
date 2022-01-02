import systemPreset from '@theme-ui/preset-system';

// TODO -- import themes for different UI primitives instead
// of putting all styles in here directly

export default {
	...systemPreset,
	config: {
		useLocalStorage: false,
		useColorSchemeMediaQuery: false
	},
	fontWeights: {
		body: 400,
		heading: 600,
		display: 800
	},
	lineHeights: {
		...systemPreset.lineHeights,
		body: 1.9
	},
	colors: {
		...systemPreset.colors,
		text: '#4a4a4a',
		primary: 'var(--ep-color-primary)',
		secondary: 'var(--ep-color-secondary)',
		tertiary: 'var(--ep-color-tertiary)',
		quaternary: 'var(--ep-color-quaternary)',
		accent: 'var(--ep-color-accent)',
		error: 'var(--ep-color-error)',
		modes: {
			dark: {
				...systemPreset.colors.modes.dark,
				text: '#eee',
				background: '#222',
				primary: 'var(--ep-color-primary)',
				secondary: 'var(--ep-color-secondary)',
				tertiary: 'var(--ep-color-tertiary)',
				quaternary: 'var(--ep-color-quaternary)',
				accent: 'var(--ep-color-accent)',
				error: 'var(--p-color-error)'
			}
		}
	},
	styles: {
		...systemPreset.styles,
		root: {
			...systemPreset.styles.root,
			a: {
				color: 'text',
				WebkitTapHighlightColor: 'rgba(255,255,255,0.3)'
			},
		},
	},
	forms: {
		input: {
			border: 'none',
			borderRadius: 10,
			fontSize: [2, null, 3],
			bg: 'var(--ep-color-primary-very-light)',
			color: 'primary',
			'&[type=text]': {
				pl: 3
			},
			'&[type=file]': {
				pl: 3
			},
			'&::placeholder': {
				fontWeight: 'body',
				opacity: 0.7
			},
			'&:focus': {
				outline: 'none'
			}
		},
		textarea: {
			border: 'none',
			color: 'primary',
			fontFamily: 'auto',
			bg: 'var(--ep-color-primary-very-light)',
			borderRadius: 10,
			'&[type=text]': {
				fontSize: [2, null, 3],
				fontWeight: 'body',
				px: 3
			},
			'&::placeholder': {
				py: 1,
				opacity: 0.7,
				fontFamily: 'sans-serif'
			},
			'&:focus': {
				outline: 'none'
			}
		}
	}
};

