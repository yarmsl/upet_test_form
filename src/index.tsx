import React from 'react';
import ReactDOM from 'react-dom';
import Form from './pages/Form';
import Confirm from './pages/Confirm';
import NotFound from './pages/404';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './UI/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router basename={'https://yarmsl.github.io/upet_test_form/'}>
				<Switch>
					<Route exact path='/' component={Form} />
					<Route exact path='/confirm' component={Confirm} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);