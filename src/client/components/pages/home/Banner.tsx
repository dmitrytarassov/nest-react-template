import React from 'react';
import Content from '@frontend/layout/Content';
import InfoText from '@frontend/components/InfoText';
import headingStyles from '../../Heading.module.scss';
import styles from './Banner.module.scss';
import classNames from 'classnames';

const Banner = () => {
  return (
    <Content>
      <div className={styles.banner}>
        <h1 className={classNames(styles.heading, headingStyles.useLines)}>
          <span>Kinoscope</span>
        </h1>
        <InfoText>
          Информационный сервис о новинках {'\n'}и акциях во всех ренталах{' '}
          {'\n'}в твоем городе
        </InfoText>
      </div>
    </Content>
  );
};

export default Banner;
