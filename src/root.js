import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import App from './app';

const Root = () => {
	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
};

export default Root;
