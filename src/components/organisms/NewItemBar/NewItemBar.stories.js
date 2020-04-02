import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { pageTypesName } from 'config';
import NewItemBar from './NewItemBar';

export default {
    component: NewItemBar,
    title: 'Organisms/NewItemBar',
    decorators: [withKnobs],
    // decorators: [(storyFn) => <Router>{storyFn()}</Router>],
};

export const Normal = () => {
    const label = 'Colors';
    const options = pageTypesName;
    const defaultValue = pageTypesName.Notes;
    const groupId = 'Theme';

    const value = select(label, options, defaultValue, groupId);
    return <NewItemBar pageContext={value} isVisible />;
};
