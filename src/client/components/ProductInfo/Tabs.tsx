import React from 'react';
import styles from './Tabs.module.scss';
import classNames from 'classnames';

interface TabsProps {
  options: {
    name: string;
    value: string;
  }[];
  active: string;
  onChange: (value: string) => void;
}

const Tabs = ({ options, active, onChange }: TabsProps) => {
  return (
    <div className={styles.tabs}>
      {options.map((option) => (
        <div
          className={classNames(styles.tab, {
            [styles.active]: option.value === active,
          })}
          onClick={() => onChange(option.value)}
          key={option.value}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
