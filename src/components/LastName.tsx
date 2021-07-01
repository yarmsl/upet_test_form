import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';
import { capitalFirstLetter } from '../lib/services';

const useStyles = makeStyles(() => ({
	root: {
		gridArea: '1 / 2 / 2 / 3',
	}
}));

const LastName = (): React.ReactElement => {

	const classes = useStyles();
	const methods = useFormContext();

	return (
		<Controller
			name="lastName"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					className={classes.root}
					label='Last Name'
					variant='outlined'
					type="text"
					fullWidth
					autoComplete="on"
					value={value}
					onChange={e => onChange(capitalFirstLetter(e))}
					error={!!error} helperText={error ? error.message : ''} />
			)}
			rules={{ required: 'Enter your last name' }}
		/>
	);
};

export default LastName;
