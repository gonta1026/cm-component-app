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

export const CmRadio: FC<Props> = ({ id, isChecked = false, children, isDisabled, value, onChange }) => {
  const radioClassNames = classNames({
    [styles.cmRadio]: true,
    [styles.isChecked]: isChecked,
    [styles.isDisabled]: isDisabled,
  });
  return (
    <label htmlFor={id} className={radioClassNames}>
      <input
        className={styles.input}
        type="radio"
        {...{ value, onChange }}
        checked={isChecked}
        disabled={isDisabled}
        readOnly={onChange === undefined}
      />
      <span className={styles.radio} />
      <span className={styles.label}>{children}</span>
    </label>
  );
};
