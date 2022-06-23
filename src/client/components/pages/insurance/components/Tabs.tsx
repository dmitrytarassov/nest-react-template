import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';

const StyledTabs = styled.div`
  display: flex;
  height: 46px;
  padding: 0px;
  box-sizing: border-box;
  border-radius: 28px;
  justify-content: flex-start;
  outline: 1px solid ${({ theme }: WithTheme) => theme.colors.borders.default};
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
  margin: -1px;
  position: relative;
  z-index: 2;

  ${({ theme, active }: WithThemeAndProps<OptionProps>) =>
    active
      ? css`
          background-color: ${theme.colors.buttons.insurance.hover.background};
          color: ${theme.colors.buttons.insurance.hover.color};
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
  className?: string;
}

const Tabs = ({ options, active, onChange, className }: TabsProps) => {
  return (
    <StyledTabs className={className}>
      {options.map((option) => (
        <Option
          active={option.value === active}
          onClick={() => onChange(option.value)}
          key={option.value}
        >
          {option.name}
        </Option>
      ))}
    </StyledTabs>
  );
};

export default Tabs;
