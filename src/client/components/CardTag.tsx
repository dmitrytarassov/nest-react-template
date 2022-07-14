import React from 'react';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import classNames from 'classnames';
import styles from './CardTag.module.scss';
import badgeStyles from './Badge.module.scss';

interface CardTagProps {
  tag: IPromotionTag['type'];
  text: string;
  size: 'small' | 'large';
}

const CardTag = ({ tag, text, size }: CardTagProps) => {
  return (
    <div className={classNames(styles.badge, badgeStyles[tag], styles[size])}>
      {text}
    </div>
  );
};

export default CardTag;
