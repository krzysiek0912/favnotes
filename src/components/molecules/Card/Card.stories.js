import React from 'react';
import StoryRouter from 'storybook-react-router';
import { withKnobs, select } from '@storybook/addon-knobs';
import { pageTypesName } from 'config';
import Card from './Card';

const obj = {
    id: '1',
    title: 'Title',
    content: 'Content',
    twitterName: 'krzysiek0912',
    created: '03.04',
    key: '1',
};
export default {
    component: Card,
    title: 'Molecules/Card',
    decorators: [withKnobs, StoryRouter()],
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs as dynamic variables.
export const Normal = () => {
    const label = 'Colors';
    const options = pageTypesName;
    const defaultValue = pageTypesName.notes;
    const groupId = 'Theme';

    const value = select(label, options, defaultValue, groupId);
    return <Card cardType={value} {...obj} />;
};
