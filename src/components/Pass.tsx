import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		gridArea: '4 / 1 / 5 / 3',
	}
}));

const Pass = (): React.ReactElement => {

	const classes = useStyles();
	const methods = useFormContext();

	useEffect(() => {
		if (methods.watch('password')?.length > 0) {
			methods.trigger('password');
		}
	}, [methods.watch('password')]);

	return (
		<Controller
			name="password"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					className={classes.root}
					label='Password'
					variant='outlined'
					type="password"
					fullWidth
					autoComplete="on"
					value={value}
					onChange={onChange}
					error={!!error} helperText={error ? error.message : ''} />
			)}
			rules={{
				required: 'Enter password',
				pattern: {
					value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
					message: 'Oops! You need a password longer than 8 characters with numbers and letters.'
				}
			}}
		/>
	);
};

export default Pass;