import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Title from '@frontend/components/pages/insurance/components/Title';
import Text from '@frontend/components/pages/insurance/components/Text';
import Subtitle from '@frontend/components/pages/insurance/components/Subtitle';
import { WithTheme } from '@frontend/utils/theme';
import classNames from 'classnames';
import imageUrl from '@frontend/utils/imageUrl';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .block {
    background: #f1f5f6;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    cursor: pointer;

    & + .block {
      margin-top: 24px;

      ${({ theme }: WithTheme) =>
        theme.mixins.tablet(css`
          margin-top: 16px;
        `)}
    }

    ${Subtitle} {
      position: relative;

      img {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    ${Text} {
      display: none;
      margin-top: 18px;
    }

    &.open {
      ${Text} {
        display: block;
      }

      ${Subtitle} {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

const Risks = () => {
  const [current, setCurrent] = useState<number>(-1);
  const blocks = [
    [
      'Внешнее воздействие',
      'Повреждение или уничтожение оборудования в результате удара, падения и других механических воздействий',
    ],
    [
      'Противоправное действие третьих лиц',
      'Кража, грабеж, разбой и другие противоправные действия со стороны третьих лиц, в результате которых был причинен ущерб оборудованию со стороны третьих лиц',
    ],
    [
      'Страховое покрытие',
      'При наступлении страхового случая 90% стоимости ущерба компенсирует страховка, остальные 10% стоимости ущерба оплачивает клиент',
    ],
  ];

  const updateCurrent = (value) => () => {
    setCurrent((_value) => {
      return _value === value ? -1 : value;
    });
  };

  return (
    <Container>
      {blocks.map(([name, value], index) => (
        <div
          className={classNames('block', { open: index === current })}
          key={name}
          onClick={updateCurrent(index)}
        >
          <Subtitle>
            {name}
            <img src={imageUrl('arrowDown.svg')} />
          </Subtitle>
          <Text>{value}</Text>
        </div>
      ))}
    </Container>
  );
};

export default Risks;
