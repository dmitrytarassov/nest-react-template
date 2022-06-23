import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  table {
    border-radius: 16px;
    border-spacing: 0;
    margin-bottom: 32px;

    ${({ theme }: WithTheme) =>
      theme.mixins.tablet(css`
        margin-bottom: 24px;
      `)}

    td,
    th {
      width: 33%;
      border-collapse: collapse;
      border: 1px solid #eaeaea;
      padding: 12px 24px;
      text-align: left;

      ${({ theme }: WithTheme) =>
        theme.mixins.tablet(css`
          padding: 10px 12px;
        `)}
    }
    th {
      background: #f1f5f6;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.5px;

      ${({ theme }: WithTheme) =>
        theme.mixins.tablet(css`
          font-size: 10px;
          line-height: 14px;
        `)}
    }

    td {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 135%;
      color: #0f0e0e;

      ${({ theme }: WithTheme) =>
        theme.mixins.tablet(css`
          font-size: 10px;
          line-height: 14px;
        `)}
    }

    th:first-child {
      border-top-left-radius: 16px;
    }

    th:last-child {
      border-top-right-radius: 16px;
    }

    tbody {
      tr:last-child {
        td:first-child {
          border-bottom-left-radius: 16px;
        }

        td:last-child {
          border-bottom-right-radius: 16px;
        }
      }
    }
  }
  .disclaimer {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #9ea6b6;
  }
`;

const Prices: React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Оценочная стоимость оборудования</th>
            <th>Стоимость страховки</th>
            <th>Срок аренды</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              от{'\u00A0'}100.000 до{'\u00A0'}300.000{'\u00A0'}₽
            </td>
            <td>от 135 ₽</td>
            <td>до 7 дней</td>
          </tr>
          <tr>
            <td>
              от{'\u00A0'}300.000 до{'\u00A0'}500.000{'\u00A0'}₽
            </td>
            <td>от 540 ₽</td>
            <td>до 7 дней</td>
          </tr>
          <tr>
            <td>
              от{'\u00A0'}500.000 до{'\u00A0'}1{'\u00A0'}млн.{'\u00A0'}₽
            </td>
            <td>от 1035 ₽</td>
            <td>до 7 дней</td>
          </tr>
        </tbody>
      </table>
      <div className="disclaimer">
        *Окончательный размер страховой премии рассчитывается при оформлении
        аренды
      </div>
    </Container>
  );
};

export default Prices;
