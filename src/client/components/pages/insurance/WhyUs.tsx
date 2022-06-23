import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Tabs from './components/Tabs';
import Subtitle from '@frontend/components/pages/insurance/components/Subtitle';
import { WithTheme } from '@frontend/utils/theme';
import Text from '@frontend/components/pages/insurance/components/Text';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  .container {
    margin-top: 24px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    width: 100%;

    ${({ theme }: WithTheme) =>
      theme.mixins.tablet(css`
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        row-gap: 16px;
      `)}

    ${Subtitle} {
      margin-bottom: 16px;
    }
  }

  .block {
    background: #f1f5f6;
    border-radius: 24px;
    padding: 24px;
  }
`;

const WhyUs: React.FC = () => {
  const [tab, settab] = useState<string>('rentals');
  return (
    <Container>
      <Tabs
        options={[
          { name: 'Ренталам', value: 'rentals' },
          { name: 'Клиентам', value: 'clients' },
        ]}
        active={tab}
        onChange={settab}
      />
      <div className="container">
        {tab === 'rentals' ? (
          <>
            <div className="block">
              <Subtitle>Экономим {'\n'}ваши деньги</Subtitle>
              <Text>
                Заплатим за поврежденную клиентом технику в кратчайший срок
              </Text>
            </div>
            <div className="block">
              <Subtitle>Говорим на одном {'\n'}языке с вами</Subtitle>
              <Text>
                Понимаем процесс аренды и технические особенности оборудования
              </Text>
            </div>
            <div className="block">
              <Subtitle>Экономим {'\n'}ваше время</Subtitle>
              <Text>
                Подберем для вас индивидуальное решение и оформим страховку
                онлайн
              </Text>
            </div>
          </>
        ) : (
          <>
            <div className="block">
              <Subtitle>У нас дешевле {'\n'}чем у других</Subtitle>
              <Text>
                На данный момент мы являемся самым выгодным страховым сервисом
                на рынке
              </Text>
            </div>
            <div className="block">
              <Subtitle>Только реальные риски {'\n'}на съемке</Subtitle>
              <Text>
                Уронил объектив или повредил камеру во время съемки? Теперь это
                тоже страховые случаи
              </Text>
            </div>
            <div className="block">
              <Subtitle>Прозрачные условия {'\n'}страхования</Subtitle>
              <Text>
                Больше не нужно платить за «удар молнии» или «похищение
                инопланетянами»
              </Text>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default WhyUs;
