import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Header from './Header';

type Props = {
	children?: React.ReactNode;
};

const useStyles = makeStyles(() => ({
	root: {
		paddingLeft: '24px',
		paddingRight: '24px',
	},
}));

const MainLayout = ({ children }: Props): React.ReactElement => {

	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<>
				<Header />
				{children}
			</>
		</Container>
	);
};

export default MainLayout;
