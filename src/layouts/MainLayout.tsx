import { Container } from '@material-ui/core';
import React from 'react';
import Header from './Header';

type Props = {
	children?: React.ReactNode;
};

const MainLayout = ({ children }: Props): JSX.Element => {
	return (
		<Container>
			<>
				<Header />
				{children}
			</>
		</Container>
	);
};

export default MainLayout;
