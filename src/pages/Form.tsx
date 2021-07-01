import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FirstName from '../components/FirstName';
import LastName from '../components/LastName';
import PhoneNumber from '../components/PhoneNumber';
import Email from '../components/Email';
import Pass from '../components/Pass';

interface dataForm {
	firstName: string;
	secondName: string;
	phoneNumber: string;
	email: string;
	pass: string;
}

const useStyles = makeStyles(() => ({
	form: {
		marginTop: '12px',
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',
		gridTemplateRows: 'repeat(5, auto)',
		gridColumnGap: '16px',
		gridRowGap: '15px',
	},
	submit: {
		gridArea: '5 / 1 / 6 / 3',
	}
}));

const Form = (): React.ReactElement => {
	const [disabled, setDisabled] = useState(true);
	const methods = useForm();
	const classes = useStyles();

	useEffect(() => {
		setDisabled(
			!methods.watch('firstName') ||
			!methods.watch('lastName') ||
			!methods.watch('phoneNumber') ||
			!methods.watch('email') ||
			!methods.watch('password')
		);
	}, [methods.watch()]);

	const onSubmit = (data: dataForm) => {
		console.log(data);
	};

	return (
		<MainLayout>
			<FormProvider {...methods} >
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<Box className={classes.form}>
						<FirstName />
						<LastName />
						<PhoneNumber />
						<Email />
						<Pass />
						<Button className={classes.submit}
							type='submit'
							variant='contained'
							color='primary'
							fullWidth
							size="large"
							disabled={disabled}>
							Next
						</Button>
					</Box>
				</form>
			</FormProvider>
		</MainLayout>
	);
};

export default Form;