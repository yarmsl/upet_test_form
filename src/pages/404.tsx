import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	notfound: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'&>*': {
			margin: '8px 0',
			textDecoration: 'none'
		}
	}
}));

const NotFound = (): React.ReactElement => {

	const classes = useStyles();

	return (
		<MainLayout>
			<Box className={classes.notfound}>
				<Typography variant='h1'>404</Typography>
				<Typography variant='body2'>Oops, there is no such page yet</Typography>
				<Link to='/'><Button variant='outlined' color='primary'>go back to safety</Button></Link>
			</Box>
		</MainLayout>
	);
};

export default NotFound;
