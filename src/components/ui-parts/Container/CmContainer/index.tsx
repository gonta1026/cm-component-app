import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const CmContainer: FC<Props> = ({ children }) => {
  return <div className={styles.cmContainer}>{children}</div>;
};
