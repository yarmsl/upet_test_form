import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';
import { capitalFirstLetter } from '../lib/services';

const useStyles = makeStyles(() => ({
	root: {
		gridArea: '1 / 1 / 2 / 2',
	}
}));

const FirstName = (): React.ReactElement => {

	const classes = useStyles();
	const methods = useFormContext();

	return (
		<Controller
			name="firstName"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					className={classes.root}
					label='First Name'
					variant='outlined'
					type="text"
					fullWidth
					autoComplete="on"
					value={value}
					onChange={e => onChange(capitalFirstLetter(e))}
					error={!!error} helperText={error ? error.message : ''} />
			)}
			rules={{ required: 'Enter your first name' }}
		/>
	);
};

export default FirstName;
