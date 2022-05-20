import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';

const StyledTabs = styled.div`
  display: flex;
  height: 56px;
  padding: 3px;
  box-sizing: border-box;
  border-radius: 28px;
  justify-content: flex-start;
  border: 1px solid ${({ theme }: WithTheme) => theme.colors.borders.default};
`;

interface OptionProps {
  active: boolean;
}

const Option = styled.div<OptionProps>`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  height: 48px;
  align-items: center;
  padding: 0 24px;

  ${({ theme, active }: WithThemeAndProps<OptionProps>) =>
    active
      ? css`
          background-color: ${theme.colors.buttons.default};
          color: ${theme.colors.text.additional};
          border-radius: 32px;
          cursor: default;
        `
      : css`
          color: ${theme.colors.text.additional};
          cursor: pointer;
        `}
`;

interface TabsProps {
  options: {
    name: string;
    value: string;
  }[];
  active: string;
  onChange: (value: string) => void;
}

const Tabs = ({ options, active, onChange }: TabsProps) => {
  return (
    <StyledTabs>
      {options.map((option) => (
        <Option
          active={option.value === active}
          onClick={() => onChange(option.value)}
        >
          {option.name}
        </Option>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
