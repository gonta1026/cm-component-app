import classNames from 'classnames';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import styles from './styles.module.scss';
type Props = {
  id?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  value?: string | number;
  type?: 'text' | 'password' | 'number';
  children: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CmRadio: FC<Props> = ({ id = undefined, isChecked = false, children, value, onChange }) => {
  const radioClassNames = classNames({
    [styles.cmRadio]: true,
    [styles.isChecked]: isChecked,
  });
  return (
    <label htmlFor={id} className={radioClassNames}>
      <input
        className={styles.input}
        type="radio"
        {...{ value, onChange }}
        checked={isChecked}
        readOnly={onChange === undefined}
      />
      <span className={styles.radio} />
      <span className={styles.label}>{children}</span>
    </label>
  );
};
