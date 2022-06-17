import React from 'react';
import styled, { css } from 'styled-components';
import BackButton from '@frontend/components/BackButton';
import { WithTheme } from '@frontend/utils/theme';

interface PageHeaderProps {
  backLink: string;
  title: string;
  children?: React.ReactNode;
  image?: string;
}

const PageHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  align-items: center;
  flex-wrap: wrap;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      flex-direction: column;
      align-items: flex-start;
    `)}
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const H1 = styled.h1`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  margin: 0;
  padding: 0;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
    `)}
`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  object-fit: contain;
  margin-right: 16px;
  border-radius: 8px;
`;

const PageHeader = ({ backLink, title, children, image }: PageHeaderProps) => {
  return (
    <PageHeaderContainer>
      <TitleContainer>
        <BackButton to={backLink} />
        {image && <Image src={image} />}
        <H1>{title}</H1>
      </TitleContainer>
      {children}
    </PageHeaderContainer>
  );
};

export default PageHeader;
