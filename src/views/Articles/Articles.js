import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { pageTypesName } from 'config';

const Articles = ({ articles }) => (
    <GridTemplate pageType={pageTypesName.articles}>
        {articles.map(({ title, content, articleUrl, created, id }) => (
            <Card
                id={id}
                cardType={pageTypesName.articles}
                title={title}
                content={content}
                articleUrl={articleUrl}
                created={created}
                key={id}
            />
        ))}
    </GridTemplate>
);

Articles.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
            articleUrl: PropTypes.string.isRequired,
        }),
    ),
};

Articles.defaultProps = {
    articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
