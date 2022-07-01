import React from 'react';
import BreadCrumbs from '@frontend/components/BreadCrumbs';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import styled, { css } from 'styled-components';
import PageHeader from '@frontend/components/PageHeader';
import { WithTheme } from '@frontend/utils/theme';
import searchIcon from '@frontend/assets/search.svg';

interface ListTopProps {
  breadcrumbs: IBreadCrumb[];
  backLink: string;
  title: string;
  image?: string;
  search?: {
    value: string;
    onChange: (value: string) => void;
  };
}

const SearchInputContainer = styled.div`
  display: flex;
  position: relative;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      width: 100%;
    `)}
`;

const SearchInput = styled.input`
  font-family: 'Roboto Mono';
  background: ${({ theme }: WithTheme) => theme.colors.background.primary};
  border: 1px solid ${({ theme }: WithTheme) => theme.colors.borders.default};
  border-radius: 8px;
  height: 40px;
  line-height: 40px;
  padding: 0 48px 0 16px;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-bottom: 12px;
  width: 100%;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      margin-bottom: 0;
    `)}
`;

const SearchIconContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 16px;
  width: 24px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListTop = ({
  breadcrumbs,
  backLink,
  title,
  search,
  image,
}: ListTopProps) => {
  return (
    <>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <PageHeader backLink={backLink} title={title} image={image}>
        {search && (
          <SearchInputContainer>
            <SearchInput
              value={search.value}
              onChange={(e) => search.onChange(e.target.value)}
            />
            <SearchIconContainer>
              <img src={searchIcon.src} />
            </SearchIconContainer>
          </SearchInputContainer>
        )}
      </PageHeader>
    </>
  );
};

export default ListTop;
