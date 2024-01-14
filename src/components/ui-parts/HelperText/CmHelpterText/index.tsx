import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
};

export const CmHelpterText: FC<Props> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};
