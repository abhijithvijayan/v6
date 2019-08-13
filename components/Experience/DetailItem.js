import React from 'react';
import styled from 'styled-components';
import { Tab } from 'react-bootstrap';
import parse from 'html-react-parser';

import { trimQuotes } from '../../utils';
import InlineLink from './InlineLink';

const StyledItemWrapper = styled(Tab.Pane)`
    h2 {
        font-size: 20px;
        color: ${({ theme }) => {
            return theme.blueWhite;
        }};
        font-weight: ${({ theme }) => {
            return theme.semibold;
        }};

        .company__at {
            color: ${props => {
                return props.theme.whiteYellow;
            }};

            .company__name {
                color: ${({ theme }) => {
                    return theme.whiteYellow;
                }};
                position: relative;
                display: inline-block;

                &:hover {
                    color: ${({ theme }) => {
                        return theme.whiteYellow;
                    }};
                }
            }
        }
    }

    h5 {
        font-size: 14px;
        margin-bottom: 30px;
        font-weight: normal;
        letter-spacing: 0.5px;
        font-family: ${({ theme }) => {
            return theme.sfmono;
        }};
    }

    ul {
        font-size: 16px;

        li {
            position: relative;
            padding-left: 30px;
            margin-bottom: 10px;
            color: ${({ theme }) => {
                return theme.lightBlue;
            }};

            &::before {
                content: '▹';
                position: absolute;
                left: 0px;
                color: ${({ theme }) => {
                    return theme.whiteYellow;
                }};
                line-height: 20px;
            }

            a {
                color: ${({ theme }) => {
                    return theme.whiteYellow;
                }};

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .disabled {
        pointer-events: none !important;
    }
`;

const DetailItem = ({ data: { attributes, html }, id }) => {
    const { company, range, title, url } = attributes;

    const renderTitle = () => {
        return trimQuotes(title);
    };

    const renderTitleWithCompany = () => {
        return (
            <React.Fragment>
                {renderTitle()}
                <span className="company__at">
                    &nbsp;@&nbsp;
                    <InlineLink
                        url={trimQuotes(url)}
                        title={trimQuotes(company)}
                        text="Visit"
                        customClass="company__name"
                        placement="top"
                    />
                </span>
            </React.Fragment>
        );
    };

    return (
        <StyledItemWrapper eventKey={id}>
            <h2>{company === '""' ? renderTitle() : renderTitleWithCompany()}</h2>
            <h5>{trimQuotes(range)}</h5>
            {parse(html)}
        </StyledItemWrapper>
    );
};

export default DetailItem;
