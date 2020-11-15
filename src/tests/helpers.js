import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

export const withTheme = component => <ThemeProvider theme={theme}>{component}</ThemeProvider>;

export const renderWithTheme = component => render(withTheme(component));
