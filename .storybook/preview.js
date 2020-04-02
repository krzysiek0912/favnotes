import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { withKnobs, select } from '@storybook/addon-knobs';
import PageContext from 'context';
import theme from '../src/theme/mainTheme';
import store from '../src/store';
import GlobalStyle from 'theme/GlobalStyle';
import { pageTypesName } from 'config';

export default {
    decorators: [withKnobs],
};

addDecorator((storyFn) => {
    const label = 'Colors';
    const options = pageTypesName;
    const defaultValue = pageTypesName.Notes;
    const groupId = 'Theme';

    const value = select(label, options, defaultValue, groupId);
    return (
        <PageContext.Provider value={value}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Provider store={store}>{storyFn()}</Provider>
            </ThemeProvider>
        </PageContext.Provider>
    );
});
