import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { IProduct } from '@lib/interfaces/IProduct';
import { WithTheme } from '@frontend/utils/theme';
import Tabs from './Tabs';

const StyledInfo = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 32px;
`;

const Title = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 40px;

  :first-child {
    margin-top: 0;
  }
`;

const base = css`
  font-family: 'Roboto Mono';
  white-space: pre;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }: WithTheme) => theme.colors.text.secondary};
`;

const PropName = styled.div`
  ${base};
  margin-right: 8px;
  white-space: pre;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      margin-right: 0;
      white-space: break-spaces;
    `)}
`;

const PropValue = styled.div`
  ${base};
  margin-left: 8px;
  white-space: initial;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      margin-left: 0;
      white-space: break-spaces;
    `)}
`;

const PropTitle = styled.div`
  font-family: 'Roboto Mono';
  white-space: pre;
  line-height: 20px;
  width: 100%;
  font-weight: 700;
  font-size: 14px;
  text-transform: capitalize;
`;

const PropValueLine = styled.p`
  margin: 0;
  width: 100%;
  text-align: right;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
`;

const PropSeparator = styled.div`
  width: 100%;
  border-bottom: 1px dashed #d8dde2;
  margin-top: 14px;
  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      display: none;
    `)}
`;

const PropText = styled.div`
  font-family: 'Roboto Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }: WithTheme) => theme.colors.text.additional};
  white-space: pre-line;
`;

const Props = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  & + ${PropText} {
    margin-top: 24px;
  }

  & + & {
    margin-top: 16px;
  }

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      flex-direction: column;
    `)}
`;

interface InfoProps {
  description?: string;
  properties?: string;
  propertiesText?: string;
  promotion?: string;
}

const Info = ({
  properties = '',
  propertiesText,
  description,
  promotion,
}: InfoProps) => {
  const [show, setShow] = useState<string>(
    properties || propertiesText ? 'properties' : 'description',
  );

  const _properties = properties
    .split('\n')
    .map((e) => {
      if (e.startsWith('**')) {
        return ['**', e.replace('**', '')];
      } else {
        const [param = '', value = ''] = e.split('===');
        return [param, value];
      }
    })
    .filter(([a, b]) => a && b);

  const showButtons =
    (propertiesText || properties) && (description || promotion);

  return (
    <StyledInfo>
      {showButtons && (
        <Buttons>
          <Tabs
            options={[
              { name: 'Характеристики', value: 'properties' },
              { name: 'Описание', value: 'description' },
            ]}
            active={show}
            onChange={setShow}
          />
        </Buttons>
      )}

      {show === 'properties' && (
        <>
          <Title>Характеристики</Title>
          {_properties.map(([name, value]) => (
            <Props key={`${name}_${value}`}>
              {name === '**' ? (
                <PropTitle>{value}</PropTitle>
              ) : (
                <>
                  <PropName>{name}</PropName>
                  <PropSeparator />
                  <PropValue>
                    {value.split('==').map((e, i) => (
                      <PropValueLine key={`${name}_${e}_${i}`}>
                        {e}
                      </PropValueLine>
                    ))}
                  </PropValue>
                </>
              )}
            </Props>
          ))}
          {propertiesText && <PropText>{propertiesText}</PropText>}
        </>
      )}

      {show === 'description' && (
        <>
          <Title>
            {promotion && !description
              ? 'Описание акци'
              : 'Описание устройства'}
          </Title>

          {promotion && <PropText>{promotion}</PropText>}
          {description && <PropText>{description}</PropText>}
        </>
      )}
    </StyledInfo>
  );
};

export default Info;
