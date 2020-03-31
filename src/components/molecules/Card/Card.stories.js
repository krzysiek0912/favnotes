import React from 'react';
import Card from './Card';

export default {
    component: Card,
    title: 'Molecules/Card',
};

export const Note = () => <Card />;
export const Twitter = () => <Card cardType="twitters" />;
export const Article = () => <Card cardType="articles" />;
