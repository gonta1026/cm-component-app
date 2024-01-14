import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  htmlFor: string;
  children: ReactNode;
  isRequired?: boolean;
};

export const CmLabel: FC<Props> = ({ htmlFor, isRequired = false, children }) => {
  return (
    <label className={styles.label} {...{ htmlFor }}>
      <span>{children}</span>
      {isRequired && <span className={styles.required}>[必須]</span>}
    </label>
  );
};
