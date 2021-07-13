import React, { useContext } from 'react';
import {Box, Button, Dialog, DialogActions, DialogTitle, makeStyles} from '@material-ui/core';
import countries from '../../lib/countries';
import { CountryContext } from '../../lib/countryContext';

const useStyles = makeStyles(() => ({
	dialTit: {
		paddingBottom: '8px',
	},
	dialAct: {
		display: 'flex',
		flexDirection: 'column',
		padding: '8px 15px'
	},
	selCou: {
		height: '24px',
		display: 'flex',
		margin: '8px',
		justifyContent: 'flex-start',
		alignItems: 'center',
		'& span': {
			textTransform: 'none',
		},
	},
	selFlag: {
		width: '27px',
		height: '20px',
		marginRight: '23px'
	}
}));

const ChangeCountry = (): React.ReactElement => {
	const {opened, handleCountry, setOpened} = useContext(CountryContext);
	const classes = useStyles();

	return (
		<Dialog open={opened} onClose={() => setOpened(!opened)}>
			<DialogTitle className={classes.dialTit}>Select country</DialogTitle>
			<DialogActions disableSpacing className={classes.dialAct}>
				{countries.map(item => {
					return (
						<Button
							className={classes.selCou}
							key={item.id}
							onClick={() => handleCountry(item.brevis)}
							fullWidth>
							<Box className={classes.selFlag}>{item.icon}</Box>
							<Box>{item.code} - {item.title}</Box>
						</Button>
					);
				})}
			</DialogActions>
		</Dialog>
	);
};

export default ChangeCountry;