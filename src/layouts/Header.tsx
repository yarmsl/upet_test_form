import React from 'react';
import { AppBar, Icon, makeStyles } from '@material-ui/core';
import Logo from '../UI/icons/Logo';

const useStyles = makeStyles((theme) => ({
	header: {
		height: '78px'
	},
	logo: {
		width: '200px',
		height: '78px',
	}
}));

const Header = (): JSX.Element => {

	const classes = useStyles();

	return (
		<AppBar color='transparent' position='sticky' className={classes.header}>
			<Icon className={classes.logo}><Logo /></Icon>
		</AppBar>
	);
};

export default Header;