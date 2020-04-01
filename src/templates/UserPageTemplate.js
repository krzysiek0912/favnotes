import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { pageTypesName } from 'config';

const UserPageTemplate = ({ children, pageType }) => (
    <>
        <Sidebar pageType={pageType} />
        {children}
    </>
);

UserPageTemplate.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
    pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
    pageType: pageTypesName.notes,
};

export default UserPageTemplate;
