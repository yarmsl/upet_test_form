import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Box, Button, makeStyles } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FirstName from '../components/FirstName';
import SecondName from '../components/SecondName';
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
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '12px',
	},
	name: {
		display: 'flex',
		flexDirection: 'row',
	}
}));

const Form = (): React.ReactElement => {

	const methods = useForm();
	const classes = useStyles();
	const onSubmit = (data: dataForm) => {
		console.log(data);
	};

	return (
		<MainLayout>
			<FormProvider {...methods} >
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<Box className={classes.form}>
						<Box className={classes.name}>
							<FirstName />
							<SecondName />
						</Box>
						<PhoneNumber />
						<Email />
						<Pass />
						<Button type='submit' variant='contained' color='primary' fullWidth>Next</Button>
					</Box>
				</form>
			</FormProvider>
		</MainLayout>
	);
};

export default Form;