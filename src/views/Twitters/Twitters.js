import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { pageTypesName } from 'config';

const Twitters = ({ twitters }) => (
    <GridTemplate pageType={pageTypesName.twitters}>
        {twitters.map(({ title, content, twitterName, created, id }) => (
            <Card
                id={id}
                cardType={pageTypesName.twitters}
                title={title}
                content={content}
                twitterName={twitterName}
                created={created}
                key={id}
            />
        ))}
    </GridTemplate>
);

Twitters.propTypes = {
    twitters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            twitterName: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
        }),
    ),
};

Twitters.defaultProps = {
    twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
