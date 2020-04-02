import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { pageTypesName } from 'config';
import Button from './Button';

export default {
    component: Button,
    title: 'Atoms/Button',
    decorators: [withKnobs],
};

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs as dynamic variables.
export const primary = (props) => {
    console.log('Props', props);
    const label = 'Colors';
    const options = pageTypesName;
    const defaultValue = 'notes';
    const groupId = 'Theme';

    const value = select(label, options, defaultValue, groupId);
    return <Button activeColor={value}>Hello World</Button>;
};

export const secondary = () => <Button secondary>Remove</Button>;
