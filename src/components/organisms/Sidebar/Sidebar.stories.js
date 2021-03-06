import React from 'react';
import StoryRouter from 'storybook-react-router';
import { withKnobs, select } from '@storybook/addon-knobs';
import { pageTypesName } from 'config';
import Sidebar from './Sidebar';

export default {
    component: Sidebar,
    title: 'Organisms/Sidebar',
    decorators: [withKnobs, StoryRouter()],
};

export const Normal = () => {
    const label = 'Colors';
    const options = pageTypesName;
    const defaultValue = pageTypesName.notes;
    const groupId = 'Theme';

    const value = select(label, options, defaultValue, groupId);
    return <Sidebar pageContext={value} />;
};
