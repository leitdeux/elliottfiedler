import systemPreset from '@theme-ui/preset-system';

export default {
	...systemPreset,
	config: {
		useLocalStorage: false,
		useColorSchemeMediaQuery: true
	},
  fonts: {
    body: "'M PLUS Rounded 1c', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    heading: "'M PLUS Rounded 1c', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    span: "'M PLUS Rounded 1c', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
  },
	fontWeights: {
		body: 400,
		heading: 600,
		display: 800
	},
	lineHeights: {
		...systemPreset.lineHeights,
		body: 1.6
	},
	colors: {
		...systemPreset.colors,
		text: '#4a4a4a',
		primary: 'var(--color-primary)',
		secondary: 'var(--color-secondary)',
		tertiary: 'var(--color-tertiary)',
		quaternary: 'var(--color-quaternary)',
		accent: 'var(--color-accent)',
		error: 'var(--color-error)',
    muted: 'lightgray',
    divider: '#efefef',
		modes: {
			dark: {
				...systemPreset.colors.modes.dark,
				text: '#eee',
				background: '#222',
				primary: 'var(--color-secondary)',
				secondary: 'var(--color-primary-fair)',
				tertiary: 'var(--color-tertiary)',
				quaternary: 'var(--color-quaternary)',
				accent: 'var(--color-accent)',
				error: 'var(--p-color-error)',
        muted: 'gray',
        divider: '#333'
			}
		}
	},
	styles: {
		...systemPreset.styles,
		root: {
			...systemPreset.styles.root,
			a: {
				color: 'text',
				WebkitTapHighlightColor: 'rgba(255,255,255,0.3)',
        textDecoration: 'none'
			},
      fontFamily: 'body'
		},
	},
	forms: {
		input: {
			border: 'none',
			borderRadius: 10,
			fontSize: [2, null, 3],
			bg: 'var(--color-primary-very-light)',
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
			bg: 'var(--color-primary-very-light)',
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

