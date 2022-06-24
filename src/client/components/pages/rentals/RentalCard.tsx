import React, { useEffect, useRef } from 'react';
import { IRental } from '@lib/interfaces/IRental';
import styled, { css } from 'styled-components';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import Link from 'next/link';
import { phoneFormat } from '@frontend/utils/phoneFormat';
import phone from '@frontend/assets/phone.svg';
import location from '@frontend/assets/location.svg';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import imageUrl from '@frontend/utils/imageUrl';

interface StyledRentalCardProps {
  active: boolean;
}

const StyledRentalCard = styled.div<StyledRentalCardProps>`
  font-family: 'Roboto Mono';
  text-decoration: none;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
  display: flex;
  padding: 24px;
  background: ${({ theme }: WithTheme) => theme.colors.background.default};
  border-radius: 16px;

  ${({ theme, active }: WithThemeAndProps<StyledRentalCardProps>) =>
    active
      ? css`
          border: 2px solid ${theme.colors.borders.active};
          box-shadow: 0px 8px 16px rgba(156, 164, 169, 0.32);
        `
      : css`
          border: 1px solid ${theme.colors.borders.default};
        `}

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      flex-direction: column;
      align-items: flex-start;
    `)}

  & + & {
    margin-top: 16px;
  }

  :hover {
    box-shadow: 0px 8px 16px rgba(156, 164, 169, 0.32);
  }
`;

const RentalCardImage = styled.img`
  width: 128px;
  height: 128px;
  margin-right: 24px;
  object-fit: contain;
  border-radius: 16px;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      height: unset;
      object-fit: unset;
      margin-bottom: 16px;
    `)}
`;
const RentalCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const RentalCardName = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 16px;
`;

const RentalCardAddress = styled.span`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 16px;
  color: ${({ theme }: WithTheme) => theme.colors.text.secondary};

  img {
    margin-right: 12px;
  }
`;

const RentalCardPhone = styled.a`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }: WithTheme) => theme.colors.links.default};

  img {
    margin-right: 12px;
  }
`;

interface RentalCardProps {
  rental: ICrudRental;
  active: boolean;
}

const RentalCard = ({ rental, active }: RentalCardProps) => {
  const ref = useRef();

  useEffect(() => {
    if (active && ref?.current) {
      // @ts-ignore
      ref.current?.scrollIntoViewIfNeeded();
    }
  }, [active]);

  return (
    <Link href={`/rentals/${rental.url}`} passHref>
      <StyledRentalCard active={active} ref={ref}>
        <RentalCardImage src={imageUrl(rental.icon)} />
        <RentalCardContent>
          <RentalCardName>{rental.name}</RentalCardName>
          <RentalCardAddress>
            <img src={location.src} alt="" />
            {rental.address}
          </RentalCardAddress>
          <RentalCardPhone href={`tel:${rental.phone}`}>
            <img src={phone.src} />
            {phoneFormat(`+${rental.phone}`)}
          </RentalCardPhone>
        </RentalCardContent>
      </StyledRentalCard>
    </Link>
  );
};

export default RentalCard;
