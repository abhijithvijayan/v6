import React from 'react';
import styled from 'styled-components';

import CardHeader from './CardHeader';
import CardTitle from './CardTitle';
import HeaderLinksHolder from './HeaderLinksHolder';
import CardSubtitleHolder from './CardSubtitleHolder';

const CardWrapper = styled.div`
  opacity: 0;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 25px;
  border-radius: 2px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  background-color: ${({theme}) => {
    return theme.darkPurple;
  }};

  @media screen and (min-width: ${({theme}) => {
      return theme.screenXsMin;
    }}) {
    box-shadow: 0 20px 70px -10px ${({theme}) => {
          return theme.shadow;
        }},
      0 25px 100px 0
        ${({theme}) => {
          return theme.shadow;
        }};
  }

  &:hover {
    transform: translateY(-5px);
  }

  footer {
    ul {
      flex-grow: 1;
      display: flex;
      align-items: flex-end;
      flex-wrap: wrap;
      margin-top: 20px;

      li {
        font-size: 12px;
        line-height: 1.75;
        margin-right: 15px;
        color: ${({theme}) => {
          return theme.skyBlue;
        }};
        font-family: ${({theme}) => {
          return theme.sfmono;
        }};
      }
    }
  }
`;

const ProjectCard = ({data: {attributes, html}, delay}) => {
  const {title, github, external, tech} = attributes;
  const links = {
    github: github !== '""' ? github : null,
    external: external !== '""' ? external : null,
  };
  return (
    <CardWrapper
      className="wow fadeInUp"
      style={{animationDelay: `${delay}ms`}}
    >
      <header>
        <CardHeader>
          <HeaderLinksHolder links={links} />
        </CardHeader>
        <CardTitle title={title} />
        <CardSubtitleHolder data={html} />
      </header>
      <footer>
        <ul>
          {tech.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </footer>
    </CardWrapper>
  );
};

export default ProjectCard;
