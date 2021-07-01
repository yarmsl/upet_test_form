import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		gridArea: '2 / 1 / 3 / 3',
	}
}));

const PhoneNumber = (): React.ReactElement => {

	const classes = useStyles();
	const methods = useFormContext();

	return (
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
			rules={{ required: 'Enter your phone number' }}
		/>
	);
};

export default PhoneNumber;