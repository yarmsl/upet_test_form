import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Backdrop, Box, makeStyles, Typography } from '@material-ui/core';
import NotificationIcon from '../UI/icons/NotificationIcon';
import Loader from '../UI/icons/Loader';
import axios from 'axios';

const useStyles = makeStyles(() => ({
	top: {
		display: 'flex',
		alignItems: 'center',
		margin: '6px 0'
	},
	icon: {
		minWidth: '90px',
		boxSizing: 'border-box',
		padding: '18px 18px 12px 0',
	},
	title: {
		maxWidth: '250px',
	},
	text: {
		marginTop: '21px',
	},
	backdr: {
		backgroundColor: 'rgba(255, 255, 255, 0.85)',
		zIndex: 2000,
	}
}));

const Confirm = (): React.ReactElement => {
	const [backdrop, setBackdrop] = useState(true);
	const [data, setData] = useState({
		firstName: '',
		phoneNumber: '',
		email: ''
	});
	const classes = useStyles();

	useEffect(() => {
		const getData = async () => {
			const res = await axios.get('https://60e02dae6b689e001788c959.mockapi.io/api/request/appeals');
			if (res.statusText === 'OK') {
				setData(res.data[res.data.length - 1]);
				setBackdrop(false);
			}
		};
		getData();
	}, [backdrop]);

	return (
		<>
			<MainLayout>
				<Box className={classes.top}>
					<Box className={classes.icon}><NotificationIcon /></Box>
					<Typography className={classes.title} variant='h2'>
						Thanks, {data?.firstName}!
						We’ve received your
						application
					</Typography>
				</Box>
				<Box>
					<Typography className={classes.text} variant='body2'>
						We’ll process your application as soon as possible and send you a decision within 30 days to {data?.phoneNumber} or {data?.email}. We will contact you in case more information is needed.
					</Typography>
					<Typography className={classes.text} variant='body2'>
						While we’re reviewing your application, please don’t submit another application for the uPet’s breeder program.
					</Typography>
				</Box>
			</MainLayout>
			<Backdrop className={classes.backdr} open={backdrop}>
				<Loader />
			</Backdrop>
		</>
	);
};

export default Confirm;
