import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import { WithTheme } from '@frontend/utils/theme';

interface BreadCrumbsProps {
  breadcrumbs: IBreadCrumb[];
}

const StyledBreadCrumbs = styled.div`
  font-family: 'Roboto Mono';
  display: flex;
  flex-wrap: wrap;
  margin: 32px 0 16px;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      display: none;
    `)}
`;

const breadCrumbBase = css`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 40px;
  color: ${({ theme }: WithTheme) => theme.colors.breadcrumbs.default};
`;

const Slash = styled.span`
  ${breadCrumbBase};
  padding: 0 12px;
`;

const BreadCrumb = styled.a`
  ${breadCrumbBase};

  :hover {
    color: ${({ theme }: WithTheme) => theme.colors.breadcrumbs.hover};
  }
`;

const LastBreadCrumb = styled.span`
  ${breadCrumbBase};
  color: ${({ theme }: WithTheme) => theme.colors.breadcrumbs.current};
`;

const BreadCrumbs = ({ breadcrumbs }: BreadCrumbsProps) => {
  return (
    <StyledBreadCrumbs>
      {breadcrumbs.map((breadcrumb, index) =>
        index !== breadcrumbs.length - 1 ? (
          <Fragment key={breadcrumb.name}>
            <Link href={breadcrumb.link} passHref>
              <BreadCrumb>{breadcrumb.name}</BreadCrumb>
            </Link>
            <Slash>{' / '}</Slash>
          </Fragment>
        ) : (
          <LastBreadCrumb key={breadcrumb.name}>
            {breadcrumb.name}
          </LastBreadCrumb>
        ),
      )}
    </StyledBreadCrumbs>
  );
};

export default BreadCrumbs;
