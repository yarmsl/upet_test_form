import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	notfound: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'&>*': {
			margin: '8px 0'
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
				<Button href='/' variant='outlined' color='primary'>go back to safety</Button>
			</Box>
		</MainLayout>
	);
};

export default NotFound;
