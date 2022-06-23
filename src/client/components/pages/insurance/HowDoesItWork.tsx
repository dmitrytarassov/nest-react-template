import React from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import Subtitle from '@frontend/components/pages/insurance/components/Subtitle';
import Text from '@frontend/components/pages/insurance/components/Text';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  .container {
    margin-top: 24px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px;
    width: 100%;
    overflow-x: hidden;

    ${({ theme }: WithTheme) =>
      theme.mixins.tablet(css`
        display: none;
      `)}

    ${Subtitle} {
      margin-bottom: 16px;
    }
  }

  .mobileContainer {
    display: none;

    ${({ theme }: WithTheme) =>
      theme.mixins.tablet(css`
        display: block;
        width: 100%;
      `)}

    ${Subtitle} {
      margin-bottom: 16px;
    }
  }

  .block {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${({ theme }: WithTheme) =>
      theme.mixins.tablet(css`
        border: 1px solid #9ea6b6;
        border-radius: 16px;
        padding: 24px;
        align-items: flex-start;
      `)}
  }

  .number {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 24px;
    background: #f1f5f6;
    border-radius: 16px;
    position: relative;

    &.withLine {
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 2000px;
        background: #f1f5f6;
        left: calc(100% + 24px);
        top: 50%;
        z-index: 1;
      }
    }

    &.breakCenter {
      z-index: 3;
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 24px;
        background: #fff;
        left: 100%;
        top: 50%;
        z-index: 2;
      }

      &::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 24px;
        background: #fff;
        right: 100%;
        top: 50%;
        z-index: 2;
      }
    }

    &.breakLast {
      z-index: 3;
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 2000px;
        background: #fff;
        left: 100%;
        top: 50%;
        z-index: 2;
      }

      &::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 24px;
        background: #fff;
        right: 100%;
        top: 50%;
        z-index: 2;
      }
    }
  }
`;

const swiperProps = {
  modules: [Navigation],
  spaceBetween: 24,
  slidesPerView: 1,
};

const HowDoesItWork: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="block">
          <div className="number withLine">1</div>
          <Subtitle>Оформление</Subtitle>
          <Text>
            Оформи страховку через менеджера рентала. Дополнительные документы
            не потребуются
          </Text>
        </div>
        <div className="block">
          <div className="number breakCenter">2</div>
          <Subtitle>Оплата</Subtitle>
          <Text>
            Ссылку на оплату мы пришлем на почту. С ценами можно ознакомиться
            тут
          </Text>
        </div>
        <div className="block">
          <div className="number breakLast">3</div>
          <Subtitle>Спокойствие</Subtitle>
          <Text>
            Проверь почту — страховой полис уже там. Теперь оборудование
            застраховано
          </Text>
        </div>
        <div className="block">
          <div className="number withLine">4</div>
          <Subtitle>Съемка</Subtitle>
          <Text>
            Реализуй самые смелые идеи, а риски на съемке мы берем на себя
          </Text>
        </div>
        <div className="block">
          <div className="number">5</div>
          <Subtitle>Не забудь</Subtitle>
          <Text>
            Наступил страховой случай? Напиши нам, пришли фото/видео повреждений
            и расскажи что случилось
          </Text>
        </div>
      </div>
      <div className="mobileContainer">
        <Swiper {...swiperProps}>
          <SwiperSlide>
            <div className="block">
              <div className="number">1</div>
              <Subtitle>Оформление</Subtitle>
              <Text>
                Оформи страховку через менеджера рентала. Дополнительные
                документы не потребуются
              </Text>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="number">2</div>
              <Subtitle>Оплата</Subtitle>
              <Text>
                Ссылку на оплату мы пришлем на почту. С ценами можно
                ознакомиться тут
              </Text>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="number">3</div>
              <Subtitle>Спокойствие</Subtitle>
              <Text>
                Проверь почту — страховой полис уже там. Теперь оборудование
                застраховано
              </Text>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="number">4</div>
              <Subtitle>Съемка</Subtitle>
              <Text>
                Реализуй самые смелые идеи, а риски на съемке мы берем на себя
              </Text>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block">
              <div className="number">5</div>
              <Subtitle>Не забудь</Subtitle>
              <Text>
                Наступил страховой случай? Напиши нам, пришли фото/видео
                повреждений и расскажи что случилось
              </Text>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default HowDoesItWork;
