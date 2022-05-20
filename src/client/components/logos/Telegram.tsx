import React from 'react';
import styled from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const Container = styled.svg`
  .hovered {
    fill: ${({ theme }: WithTheme) => theme.colors.links.alternate.default};
  }

  :hover {
    .hovered {
      fill: ${({ theme }: WithTheme) => theme.colors.links.alternate.hover};
    }
  }
`;

const Telegram = () => {
  return (
    <Container
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        className="hovered"
      />
      <path
        d="M23 10.4605L20.4694 22.4588C20.4694 22.4588 20.1155 23.2909 19.1422 22.8915L13.3026 18.6813L11.1792 17.7162L7.60468 16.5845C7.60468 16.5845 7.05612 16.4015 7.00299 16.0021C6.94986 15.6027 7.62239 15.3864 7.62239 15.3864L21.8319 10.1445C21.8319 10.1445 22.9999 9.6619 22.9999 10.4607"
        fill="#0F0E0E"
      />
      <path
        d="M12.661 22C12.661 22 12.4919 21.9848 12.2811 21.3433C12.0707 20.7019 11 17.3262 11 17.3262L19.5121 12.1275C19.5121 12.1275 20.0035 11.8406 19.986 12.1275C19.986 12.1275 20.0737 12.1782 19.8103 12.4145C19.5472 12.6509 13.1237 18.204 13.1237 18.204"
        fill="#D8DDE2"
      />
    </Container>
  );
};

export default Telegram;
