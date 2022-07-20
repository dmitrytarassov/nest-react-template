import React from 'react';
import styles from './Block.module.scss';

interface BlockProps {
  children: React.ReactNode;
  title?: string;
  blockName: string;
}

const Block = ({ children, title, blockName }: BlockProps) => {
  return (
    <div className={styles.block} style={{ gridArea: blockName }}>
      {title && <div className={styles.title}>{title}</div>}
      {children}
    </div>
  );
};

export default Block;
