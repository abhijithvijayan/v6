import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row} from 'react-bootstrap';

const Button = styled.button`
  margin: 100px auto 0px;
  cursor: pointer;
`;

class MoreProjectsButton extends Component {
  handleClick = (hasExpanded) => {
    this.props.expandProjects(!hasExpanded);
  };

  render() {
    const {hasExpanded} = this.props;
    return (
      <Row>
        <Col md={12} className="text-center">
          <Button
            onClick={() => {
              return this.handleClick(hasExpanded);
            }}
            type="button"
            className="button__main"
          >
            {hasExpanded ? 'Show Less' : 'Show More'}
          </Button>
        </Col>
      </Row>
    );
  }
}

export default MoreProjectsButton;
