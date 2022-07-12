import Button from '@frontend/components/Button';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import _500 from './500.svg';
import _400 from './400.svg';
import { WithTheme } from '@frontend/utils/theme';
import { useRentals } from '@frontend/hooks/useRentals';
import { useRouter } from 'next/router';
import { useMap } from '@frontend/hooks/useMap';

type Props = {
  statusCode: number;
};

const Container = styled.div<{ image: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  min-height: calc(100vh - 72px - 275px);
  width: 100%;
`;

const Text = styled.div`
  margin-bottom: 56px;
  font-family: 'Neue Machina';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 64px;
  white-space: break-spaces;
  text-align: center;
  padding: 0 32px;

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      margin: 64px 0 32px;
    `)};
`;

const Image = styled.img`
  width: 100%;
  margin-top: 32px;
  margin-bottom: -32px;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      height: 250px;
      object-fit: cover;
    `)};
`;

const images = {
  500: _500.src,
  400: _400.src,
};

export default function ErrorPage({ statusCode }: Props) {
  const router = useRouter();
  const { rentals } = useRentals();
  const { activeRental } = useMap();
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    setInit(true);
    return () => {
      setInit(false);
    };
  }, []);

  useEffect(() => {
    if (activeRental && init) {
      const rental = rentals.find(({ id }) => id === activeRental);
      if (rental) {
        router.push(`/rentals/${rental.url}`);
      }
    }
  }, [activeRental]);

  const code = statusCode < 500 ? 400 : 500;
  const text =
    code === 500
      ? 'Ой, кажется что-то сломалось,\nскоро мы все починим!'
      : 'Опа! А страница-то не найдена!';
  return (
    <Container image={images[code] || images[500]}>
      <Text>{text}</Text>
      <Button type="link" href="/">
        Вернуться обратно
      </Button>
      <Image src={images[code] || images[500]} />
    </Container>
  );
}
