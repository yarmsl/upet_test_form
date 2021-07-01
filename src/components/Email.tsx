import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		gridArea: '3 / 1 / 4 / 3',
	}
}));

const Email = (): React.ReactElement => {

	const classes = useStyles();
	const methods = useFormContext();

	return (
		<Controller
			name="email"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					className={classes.root}
					label='Email'
					variant='outlined'
					type="text"
					fullWidth
					autoComplete="on"
					value={value}
					onChange={onChange}
					error={!!error} helperText={error ? error.message : ''} />
			)}
			rules={{ required: 'Enter your Email' }}
		/>
	);
};

export default Email;