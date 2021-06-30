import { createMuiTheme } from '@material-ui/core';
import rawline400 from '../fonts/rawline-400.woff2';
import rawline500 from '../fonts/rawline-500.woff2';

const rawline_regular = {
	fontFamily: 'Rawline',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
	  local('Rawline'),
	  local('rawline-400'),
	  url(${rawline400}) format('woff2')
	`,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const rawline_semiBold = {
	fontFamily: 'Rawline',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 500,
	src: `
	  local('Rawline'),
	  local('rawline-500'),
	  url(${rawline500}) format('woff2')
	`,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
	breakpoints: {
		keys: {
			0: 'xs',
			1: 'sm',
			2: 'md',
			3: 'lg',
			4: 'xl',
		},
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		},
	},
	typography: {
		fontFamily: 'Rawline'
	},
	shadows: [ //вызываются theme.spacing[порядковый номер в этом массиве]
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none', //используется выпадашки из селектов TextField
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
	],
	shape: {
		borderRadius: 0,
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [rawline_regular, rawline_semiBold],
			},
		},
	},
});

export default theme;