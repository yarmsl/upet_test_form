import React from 'react';
import { AppBar, makeStyles } from '@material-ui/core';
import Logo from '../UI/icons/Logo';

const useStyles = makeStyles(() => ({
	header: {
		height: '78px',
		paddingTop: '24px',
		paddingBottom: '24px',
		alignItems: 'flex-start',
	},
}));

const Header = (): React.ReactElement => {

	const classes = useStyles();

	return (
		<AppBar color='transparent' position='static' className={classes.header}>
			<Logo />
		</AppBar>
	);
};

export default Header;