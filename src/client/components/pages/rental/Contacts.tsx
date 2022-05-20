import React from 'react';
import styled from 'styled-components';
import { phoneFormat } from '@frontend/utils/phoneFormat';
import { WithTheme } from '@frontend/utils/theme';

const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const StyledContact = styled.div`
  height: 20px;
  width: 100%;
  display: flex;

  a {
    color: ${({ theme }: WithTheme) => theme.colors.links.default};
    :hover {
      color: ${({ theme }: WithTheme) => theme.colors.links.hover};
    }
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`;

interface ContactsProps {
  phone?: number;
  email?: string;
}

const Contacts = ({ phone, email }: ContactsProps) => {
  return (
    <StyledContacts>
      {phone && (
        <StyledContact>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.55356 5.63979C4.74261 5.22891 5.16346 4.91736 5.47588 4.60479C6.37765 3.70288 7.87314 3.82639 8.61489 4.86392L9.35287 5.8964C9.94015 6.71816 9.84717 7.84391 9.13338 8.55777L9.07088 8.62029C8.68823 9.00293 8.49179 9.52875 8.71746 10.0208C9.00461 10.6464 9.62982 11.6386 10.9916 13.0008C12.3472 14.3569 13.3428 14.9891 13.9746 15.284C14.4765 15.518 15.0168 15.3208 15.4083 14.9291L15.4563 14.8812C16.1698 14.1674 17.2947 14.0746 18.1159 14.6609L19.1354 15.3894C20.1736 16.131 20.2973 17.6278 19.3953 18.5302C19.0826 18.843 18.7706 19.2646 18.3587 19.4523C17.3383 19.9181 13.0509 21.3847 7.83042 16.1628C2.60599 10.9368 4.08661 6.65413 4.55356 5.63979Z"
              stroke="black"
              strokeWidth="2"
            />
          </svg>

          <a href={`tel:${phone}`}>{phoneFormat(`+${phone}`)}</a>
        </StyledContact>
      )}
      {email && (
        <StyledContact>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 7.99987V12.9999C16 13.7955 16.3161 14.5586 16.8787 15.1212C17.4413 15.6838 18.2044 15.9999 19 15.9999C19.7957 15.9999 20.5587 15.6838 21.1213 15.1212C21.6839 14.5586 22 13.7955 22 12.9999V11.9999C21.9999 9.7429 21.2362 7.55235 19.8333 5.7844C18.4303 4.01645 16.4706 2.77509 14.2726 2.26217C12.0747 1.74924 9.76794 1.99491 7.72736 2.95923C5.68677 3.92356 4.03241 5.54982 3.03327 7.57359C2.03413 9.59736 1.74898 11.8996 2.22418 14.106C2.69938 16.3124 3.90699 18.2931 5.65064 19.7261C7.39429 21.1592 9.57144 21.9602 11.8281 21.999C14.0847 22.0378 16.2881 21.3121 18.08 19.9399"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <a href={`mailto:${email}`}>{email}</a>
        </StyledContact>
      )}
    </StyledContacts>
  );
};

export default Contacts;
