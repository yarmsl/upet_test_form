import React, { useState, useEffect, useReducer } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, IconButton, makeStyles, TextField } from '@material-ui/core';
import countries from '../lib/countries';
import countryReducer from '../lib/countryReducer';
import ChangeCountry from './modals/ChangeCountry';
import { CountryContext } from '../lib/countryContext';

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
		<CountryContext.Provider value = {{opened, setOpened, handleCountry }}>
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
			<ChangeCountry />
		</CountryContext.Provider>
	);
};

export default PhoneNumber;