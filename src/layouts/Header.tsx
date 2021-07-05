import React from 'react';
import { AppBar, makeStyles } from '@material-ui/core';
import Logo from '../UI/icons/Logo';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	header: {
		height: '78px',
		paddingTop: '24px',
		paddingBottom: '24px',
		alignItems: 'flex-start',
		'& svg': {
			height: '30px',
		}
	},
}));

const Header = (): React.ReactElement => {

	const classes = useStyles();

	return (
		<AppBar color='transparent' position='static' className={classes.header}>
			<Link to='/' >
				<Logo />
			</Link>
		</AppBar>
	);
};

export default Header;