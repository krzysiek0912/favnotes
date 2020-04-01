import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { pageTypesName } from 'config';

const Notes = ({ notes }) => (
    <GridTemplate pageType={pageTypesName.notes}>
        {notes.map(({ title, content, created, id }) => (
            <Card
                id={id}
                cardType={pageTypesName.notes}
                title={title}
                content={content}
                created={created}
                key={id}
            />
        ))}
    </GridTemplate>
);

Notes.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
        }),
    ),
};

Notes.defaultProps = {
    notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
