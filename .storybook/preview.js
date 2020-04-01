import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from '../src/theme/mainTheme';
import store from '../src/store';
import GlobalStyle from 'theme/GlobalStyle';

addDecorator((storyFn) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>{storyFn()}</Provider>
    </ThemeProvider>
));
