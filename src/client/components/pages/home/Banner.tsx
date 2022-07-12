import React from 'react';
import Content from '@frontend/layout/Content';
import styled from 'styled-components';
import Heading from '@frontend/components/Heading';
import InfoText from '@frontend/components/InfoText';
import headingStyles from '../../Heading.module.scss';
import styles from './Banner.module.scss';
import classNames from 'classnames';

const StyledHeading = styled(Heading)`
  margin-bottom: 32px;
  font-family: 'Neue Machina';
`;

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
