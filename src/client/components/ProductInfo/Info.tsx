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
  font-size: 22px;
  line-height: 40px;
  margin-bottom: 24px;
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
`;

const PropValue = styled.div`
  ${base};
  margin-left: 8px;
`;

const PropValueLine = styled.p`
  margin: 0;
  width: 100%;
  text-align: right;
`;

const PropSeparator = styled.div`
  width: 100%;
  border-bottom: 1px dashed #d8dde2;
  margin-top: 14px;
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
            <Props>
              {name === '**' ? (
                <PropValue>{value}</PropValue>
              ) : (
                <>
                  <PropName>{name}</PropName>
                  <PropSeparator />
                  <PropValue>
                    {value.split('==').map((e) => (
                      <PropValueLine key={e}>{e}</PropValueLine>
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
          {promotion && (
            <>
              <Title>Описание акции</Title>
              <PropText>{promotion}</PropText>
            </>
          )}
          {description && (
            <>
              <Title>Описание</Title>
              <PropText>{description}</PropText>
            </>
          )}
        </>
      )}
    </StyledInfo>
  );
};

export default Info;
