import classNames from 'classnames';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';
type Props = {
  isDisabled?: boolean;
  isChecked?: boolean;
  value?: string | number;
  type?: 'text' | 'password' | 'number';
  children: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const { done } = MATERIAL_ICON;

export const CmCheckbox: FC<Props> = ({ isChecked = false, isDisabled = false, children, value, onChange }) => {
  const checkboxClassNames = classNames({
    [styles.cmCheckbox]: true,
    [styles.isChecked]: isChecked,
    [styles.isDisabled]: isDisabled,
  });
  return (
    <label className={checkboxClassNames}>
      <input
        className={styles.input}
        type="checkbox"
        {...{ value, onChange }}
        checked={isChecked}
        readOnly={onChange === undefined}
        disabled={isDisabled}
      />
      <span className={styles.checkbox}>
        <div className={styles.checkboxInner}>
          <Image src={done.src} alt={done.alt} width={14} height={12} />
        </div>
      </span>
      <span className={styles.label}>{children}</span>
    </label>
  );
};
