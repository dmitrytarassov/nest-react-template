import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { IProduct } from '@lib/interfaces/IProduct';
import Heading from '@frontend/components/Heading';
import { WithTheme } from '@frontend/utils/theme';
import Tabs from '@frontend/components/pages/product/Tabs';

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

interface InfoProps {
  product: IProduct;
}

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

const PropSeparator = styled.div`
  width: 100%;
  border-bottom: 1px dashed #d8dde2;
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
  align-items: flex-end;
  width: 100%;

  & + ${PropText} {
    margin-top: 24px;
  }

  & + & {
    margin-top: 16px;
  }
`;

const Info = ({ product }: InfoProps) => {
  const [show, setShow] = useState<string>(
    product.properties.length || product.propertiesText
      ? 'properties'
      : 'description',
  );

  return (
    <StyledInfo>
      {(product.propertiesText || product.properties.length) &&
        product.description && (
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
          <Title>Характеристики устройства</Title>
          {product.properties.map(([name, value]) => (
            <Props>
              <PropName>{name}</PropName>
              <PropSeparator />
              <PropValue>{value}</PropValue>
            </Props>
          ))}
          {product.propertiesText && (
            <PropText>{product.propertiesText}</PropText>
          )}
        </>
      )}

      {show === 'description' && (
        <>
          <Title>Описание устройства</Title>
          {product.description && <PropText>{product.description}</PropText>}
        </>
      )}
    </StyledInfo>
  );
};

export default Info;
