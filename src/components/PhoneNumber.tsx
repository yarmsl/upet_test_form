import React, { useState, useEffect, useReducer } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, Button, Dialog, DialogActions, DialogTitle, IconButton, makeStyles, TextField } from '@material-ui/core';
import countries from '../lib/countries';
import countryReducer from '../lib/countryReducer';

const useStyles = makeStyles(() => ({
	container: {
		position: 'relative',
		gridArea: '2 / 1 / 3 / 3',
	},
	root: {
		'& input': {
			paddingLeft: '63px',
		},
		'& label': {
			marginLeft: '51px',
		}
	},
	flagIcon: {
		width: '51px',
		height: '51px',
		position: 'absolute',
		zIndex: 1000,
		top: '5px',
		left: '7px',
	},
	dialTit: {
		paddingBottom: '8px',
	},
	dialAct: {
		display: 'flex',
		flexDirection: 'column',
		padding: '8px 15px'
	},
	selCou: {
		height: '24px',
		display: 'flex',
		margin: '8px',
		justifyContent: 'flex-start',
		alignItems: 'center',
		'& span': {
			textTransform: 'none',
		},
	},
	selFlag: {
		width: '27px',
		height: '20px',
		marginRight: '23px'
	}
}));

const PhoneNumber = (): React.ReactElement => {
	const [opened, setOpened] = useState(false);
	const classes = useStyles();
	const methods = useFormContext();
	const [state , dispatch] = useReducer(countryReducer, {
		icon: countries[0].icon, 
		phoneformat: countries[0].phoneformat, 
		count: countries[0].count 
	});

	useEffect(() => {
		if (methods.watch('phoneNumber')?.length > 0) {
			methods.trigger('phoneNumber');
		}
	}, [methods.watch('phoneNumber')]);

	const handleCountry = (brevis: string) => {
		dispatch({type: brevis});
		methods.setValue('phoneNumber', '');
		setOpened(!opened);
	};

	return (
		<>
			<Box className={classes.container}>
				<IconButton
					className={classes.flagIcon}
					onClick={() => setOpened(!opened)}>
					{state.icon}
				</IconButton>
				<Controller
					name="phoneNumber"
					control={methods.control}
					defaultValue=''
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<TextField
							inputProps={{
								inputMode: 'decimal',
							}}
							className={classes.root}
							label='Phone number'
							variant='outlined'
							type="tel"
							fullWidth
							autoComplete="on"
							value={value}
							onChange={e => onChange(state.phoneformat(e))}
							error={!!error} helperText={error ? error.message : ''} />
					)}
					rules={{
						required: 'Enter your phone number',
						minLength: {
							value: state.count,
							message: 'Not enough digits here'
						}
					}} />
			</Box>
			<Dialog open={opened} onClose={() => setOpened(!opened)}>
				<DialogTitle className={classes.dialTit}>Select country</DialogTitle>
				<DialogActions disableSpacing className={classes.dialAct}>
					{countries.map(item => {
						return (
							<Button
								className={classes.selCou}
								key={item.id}
								onClick={() => handleCountry(item.brevis)}
								fullWidth>
								<Box className={classes.selFlag}>{item.icon}</Box>
								<Box>{item.code} - {item.title}</Box>
							</Button>
						);
					})}
				</DialogActions>
			</Dialog>
		</>
	);
};

export default PhoneNumber;