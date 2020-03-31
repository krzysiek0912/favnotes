import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
    component: Button,
    title: 'Atoms/Button',
    decorators: [withKnobs],
};

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs as dynamic variables.
export const primary = () => {
    const label = 'Colors';
    const options = {
        Notes: 'note',
        Twitters: 'twitter',
        Articles: 'article',
    };
    const defaultValue = 'notes';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);
    return <Button theme={value}>Hello World</Button>;
};

export const secondary = () => <Button secondary>Remove</Button>;
