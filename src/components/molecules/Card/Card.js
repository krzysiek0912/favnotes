import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import { removeItemAction } from 'reducers/rootReducers';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
    max-width: 500px;
    min-width: 380px;
    min-height: 380px;
    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
    z-index: 99;
    position: relative;
    padding: 22px 30px;
    background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};
    :first-of-type {
        z-index: 9999;
    }
    ${({ flex }) =>
        flex &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `}
`;

const DateInfo = styled(Paragraph)`
    margin: 0;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
    margin: 0;
`;

const StyledAvatar = styled.img`
    width: 86px;
    height: 86px;
    border: 5px solid ${({ theme }) => theme.twitters};
    border-radius: 50px;
    position: absolute;
    right: 25px;
    top: 25px;
`;

const StyledLinkButton = styled.a`
    display: block;
    width: 47px;
    height: 47px;
    border-radius: 50px;
    background: white url(${LinkIcon}) no-repeat;
    background-size: 60%;
    background-position: 50%;
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
`;

class Card extends Component {
    state = {
        redirect: false,
    };

    handleCardClick = () => this.setState({ redirect: true });

    render() {
        const {
            removeItem,
            id,
            pageContext,
            title,
            created,
            twitterName,
            articleUrl,
            content,
        } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={`${pageContext}/${id}`} />;
        }
        return (
            <StyledWrapper onClick={this.handleCardClick}>
                <InnerWrapper activeColor={pageContext}>
                    <StyledHeading>{title}</StyledHeading>
                    <DateInfo>{created}</DateInfo>
                    {pageContext === 'twitters' && (
                        <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
                    )}
                    {pageContext === 'articles' && <StyledLinkButton href={articleUrl} />}
                </InnerWrapper>
                <InnerWrapper flex>
                    <Paragraph>{content}</Paragraph>
                    <Button onClick={() => removeItem(pageContext, id)} secondary>
                        REMOVE
                    </Button>
                </InnerWrapper>
            </StyledWrapper>
        );
    }
}

Card.propTypes = {
    removeItem: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    pageContext: PropTypes.oneOf(['twitters', 'articles', 'notes']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
};

Card.defaultProps = {
    pageContext: 'notes',
    twitterName: null,
    articleUrl: null,
};

const mapDispatchToProps = (dispatch) => ({
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType, id)),
});

export default connect(null, mapDispatchToProps)(withContext(Card));
