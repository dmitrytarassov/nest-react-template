import styled from 'styled-components';

const Text = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  &.withPadding {
    padding: 0 24px;
  }

  a {
    color: #fe6b01 !important;
    text-decoration: none;

    &:hover {
      color: #fe6b01 !important;
      text-decoration: underline;
    }
  }
`;

export default Text;
