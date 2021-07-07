import React, { useState, useEffect, useReducer } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, Button, Dialog, DialogActions, DialogTitle, IconButton, makeStyles, TextField } from '@material-ui/core';
import { USAflagIcon, AUSflagIcon } from '../UI/icons/FlagsIcons';
import { phoneFormatUSA, phoneFormatAUS } from '../lib/services';

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

const countries = [
	{ id: 1, brevis: 'USA', icon: <USAflagIcon />, code: '+1', title: 'United States', phoneformat: phoneFormatUSA, count: 14 },
	{ id: 2, brevis: 'AUS', icon: <AUSflagIcon />, code: '+61', title: 'Australia', phoneformat: phoneFormatAUS, count: 12 }
];

//reducer refactoring
interface countryInterface {
	id: number;
	brevis: string;
	icon: JSX.Element;
	code: string;
	title: string;
	phoneformat: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => string;
	count: number;
}

interface ActionInterface {
   type: string;
}

const initState = { id: 1, brevis: 'USA', icon: <USAflagIcon />, code: '+1', title: 'United States', phoneformat: phoneFormatUSA, count: 14 };

const reducer = (state: countryInterface, action: ActionInterface) => {
	switch (action.type) {
	case 'USA':
		return { id: 1, brevis: 'USA', icon: <USAflagIcon />, code: '+1', title: 'United States', phoneformat: phoneFormatUSA, count: 14 };
	case 'AUS':
		return { id: 2, brevis: 'AUS', icon: <AUSflagIcon />, code: '+61', title: 'Australia', phoneformat: phoneFormatAUS, count: 12 };
	default: 
		return { id: 1, brevis: 'USA', icon: <USAflagIcon />, code: '+1', title: 'United States', phoneformat: phoneFormatUSA, count: 14 };
	}
};
//

const PhoneNumber = (): React.ReactElement => {
	const [country, setCountry] = useState(1);
	const [opened, setOpened] = useState(false);
	const classes = useStyles();
	const methods = useFormContext();

	const [state , dispatch] = useReducer(reducer, initState);

	useEffect(() => {
		console.log(state);
		if (methods.watch('phoneNumber')?.length > 0) {
			methods.trigger('phoneNumber');
		}
	}, [methods.watch('phoneNumber')]);

	const handleCountry = (id: number) => {
		setCountry(id);
		methods.setValue('phoneNumber', '');
		setOpened(!opened);
	};

	return (
		<>
			<Box className={classes.container}>
				<IconButton
					className={classes.flagIcon}
					onClick={() => setOpened(!opened)}>
					{countries[country - 1].icon}
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
							onChange={e => onChange(countries[country - 1].phoneformat(e))}
							error={!!error} helperText={error ? error.message : ''} />
					)}
					rules={{
						required: 'Enter your phone number',
						minLength: {
							value: countries[country - 1].count,
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
								onClick={() => handleCountry(item.id)}
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