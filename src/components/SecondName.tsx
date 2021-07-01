import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';
import { capitalFirstLetter } from '../lib/services';

const useStyles = makeStyles((theme) => ({

}));

const SecondName = (): React.ReactElement => {

	const classes = useStyles();
	const methods = useFormContext();

	return (
		<Controller
			name="secondName"
			control={methods.control}
			defaultValue=''
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					label='Second Name'
					variant='outlined'
					type="text"
					fullWidth
					autoComplete="on"
					value={value}
					onChange={e => onChange(capitalFirstLetter(e))}
					error={!!error} helperText={error ? error.message : ' '} />
			)}
			rules={{ required: 'Enter your second name' }}
		/>
	);
};

export default SecondName;
