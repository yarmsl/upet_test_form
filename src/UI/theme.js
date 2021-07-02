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
	palette: {
		primary: {
			main: '#02E0B1',
		},
		secondary: {
			main: '#ffffff',
		},
		error: {
			main: '#F44336',
		},
		background: {
			default: '#fff',
		},
	},
	typography: {
		fontFamily: 'Rawline',
	},
	shadows: [
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
		borderRadius: 2,
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [rawline_regular, rawline_semiBold],
			},
		},
		MuiButton: {
			label: {
				color: '#fff',
			},
			containedSizeLarge: {
				height: '60px',
			},
			contained: {
				'&$disabled': {
					backgroundColor: '#02E0B1',
					color: '#fff',
					opacity: '.6',
				}
			}
		},
		MuiOutlinedInput: {
			root: {
				'&$focused $notchedOutline': {
					borderColor: '#DFDFDF',
					borderWidth: '1px',
				},
				'&:hover $notchedOutline': {
					borderColor: '#DFDFDF !important',
				},
			},
			notchedOutline: {
				borderColor: '#DFDFDF',
			},
			input: {
				padding: '25px 12px 16px',
			},
		},
		MuiInputLabel: {
			outlined: {
				transform: 'translate(12px, 21px) scale(1)',
				'&$shrink': {
					transform: 'translate(12px, 9px) scale(0.75)',
				}
			},
			shrink: {
				transform: 'translate(12px, 0px) scale(0.75)',
			},
		},
		MuiFormHelperText: {
			root: {
				marginTop: '0px',
				lineHeight: '15px',
			},
			contained: {
				marginLeft: '0px',
				marginRight: '0px',
			}
		},
		PrivateNotchedOutline: {
			legendLabelled: {
				maxWidth: '0px !important'
			}
		}
	},
});

export default theme;