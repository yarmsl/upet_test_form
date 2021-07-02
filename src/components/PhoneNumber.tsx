import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Box, IconButton, makeStyles, TextField } from '@material-ui/core';
import { USAflagIcon, AUSflagIcon } from '../UI/icons/FlagsIcons';

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
		position: 'absolute',
		zIndex: 1000,
		top: '0px',
		bottom: '0px',
		left: '7px',
	}
}));

const USA = {
	icon: < USAflagIcon />
};

const AUS = {
	icon: < AUSflagIcon />
};

const PhoneNumber = (): React.ReactElement => {
	const [country, setCountry] = useState(USA);
	const classes = useStyles();
	const methods = useFormContext();

	return (
		<Box className={classes.container}>
			<IconButton
				className={classes.flagIcon}
				onClick={() => console.log('h')}>
				{country.icon}
			</IconButton>
			<Controller
				name="phoneNumber"
				control={methods.control}
				defaultValue=''
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						className={classes.root}
						label='Phone number'
						variant='outlined'
						type="text"
						fullWidth
						autoComplete="on"
						value={value}
						onChange={onChange}
						error={!!error} helperText={error ? error.message : ''} />
				)}
				rules={{ required: 'Enter your phone number' }} />
		</Box>
	);
};

export default PhoneNumber;