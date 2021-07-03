import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

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
				<Link to="/"><Header /></Link>
				{children}
			</>
		</Container>
	);
};

export default MainLayout;
