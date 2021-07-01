import React from 'react';
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
			rules={{ required: 'Enter password' }}
		/>
	);
};

export default Pass;