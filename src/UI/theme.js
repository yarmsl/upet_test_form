import { createMuiTheme } from '@material-ui/core';

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
	}
});

export default theme;