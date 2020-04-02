import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withKnobs, select } from '@storybook/addon-knobs';
import { pageTypesName } from 'config';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

const StyledBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background: ${({ theme, pageContext }) => theme[pageContext]};
`;

const BackgroundOption = ({ children }) => {
    const label = 'Colors';
    const options = pageTypesName;
    const defaultValue = pageTypesName.Notes;
    const groupId = 'Theme';
    const value = select(label, options, defaultValue, groupId);
    return (
        <StyledBackground pageContext={value} isVisible>
            {children}
        </StyledBackground>
    );
};

BackgroundOption.propTypes = {
    children: PropTypes.node.isRequired,
};

export default {
    component: ButtonIcon,
    title: 'Atoms/ButtonIcon',
    decorators: [(storyFn) => <BackgroundOption>{storyFn()}</BackgroundOption>, withKnobs],
};

export const Bulb = () => <ButtonIcon icon={bulbIcon} />;
export const Active = () => <ButtonIcon className="active" icon={bulbIcon} />;
export const Logout = () => <ButtonIcon icon={logoutIcon} />;
export const Pen = () => <ButtonIcon icon={penIcon} />;
export const Plus = () => <ButtonIcon icon={plusIcon} />;
export const Twitter = () => <ButtonIcon icon={twitterIcon} />;
