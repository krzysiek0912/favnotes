import React from 'react';
import StoryRouter from 'storybook-react-router';
import Card from './Card';

export default {
    component: Card,
    title: 'Molecules/Card',
    decorators: [StoryRouter()],
};
const obj = {
    id: '1',
    title: 'Title',
    content: 'Content',
    twitterName: 'krzysiek0912',
    created: '03.04',
    key: '1',
};
export const Note = () => <Card {...obj} />;
export const Twitter = () => <Card cardType="twitters" {...obj} />;
export const Article = () => <Card cardType="articles" {...obj} />;
