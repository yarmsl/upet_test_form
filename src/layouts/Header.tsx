import React from 'react';
import { AppBar, makeStyles } from '@material-ui/core';
import Logo from '../UI/icons/Logo';

const useStyles = makeStyles((theme) => ({
	header: {
		height: '78px'
	},
	logo: {

	}
}));

const Header = (): JSX.Element => {

	const classes = useStyles();

	return (
		<AppBar color='transparent' position='sticky' className={classes.header}>
			<Logo />
		</AppBar>
	);
};

export default Header;