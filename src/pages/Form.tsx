import React, { useState, useEffect, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { Backdrop, Box, Button, makeStyles } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FirstName from '../components/FirstName';
import LastName from '../components/LastName';
import PhoneNumber from '../components/PhoneNumber';
import Email from '../components/Email';
import Pass from '../components/Pass';
import Loader from '../UI/icons/Loader';
import axios from 'axios';
import countries, {CountryCTX} from '../lib/countries';

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
		'& span': {
			color: '#fff',
		},
		marginTop: '21px',
		gridArea: '5 / 1 / 6 / 3',
	},
	backdr: {
		backgroundColor: 'rgba(255, 255, 255, 0.85)',
		zIndex: 2000,
	}
}));

const Form = (): React.ReactElement => {
	const [disabled, setDisabled] = useState(true);
	const [backdrop, setBackdrop] = useState(false);
	const methods = useForm();
	const classes = useStyles();
	const history = useHistory();

	useEffect(() => {
		setDisabled(
			!methods.watch('firstName') ||
			!methods.watch('lastName') ||
			!methods.watch('phoneNumber') ||
			!methods.watch('email') ||
			!methods.watch('password') ||
			!!methods.formState.errors?.phoneNumber ||
			!!methods.formState.errors?.email ||
			!!methods.formState.errors?.password
		);
	}, [methods.watch()]);

	const onSubmit = (data: dataForm) => {
		setBackdrop(true);
		axios.post('https://60e02dae6b689e001788c959.mockapi.io/api/request/appeals', data)
			.then((res) => {
				if (res.statusText === 'Created') {
					history.push('/confirm');
				}
			})
			.catch(err => console.error(err));
	};

	return (
		<>
			<MainLayout>
				<CountryCTX.Provider value={countries[1]}>
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
				</CountryCTX.Provider>
			</MainLayout>
			<Backdrop className={classes.backdr} open={backdrop}>
				<Loader />
			</Backdrop>
		</>
	);
};
export default Form;