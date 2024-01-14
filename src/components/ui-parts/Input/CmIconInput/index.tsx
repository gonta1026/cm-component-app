import classNames from 'classnames';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';
import styles from './styles.module.scss';

type Props = {
  id?: string;
  placeholder?: string;
  isDisabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isError?: ReactNode;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const { search } = MATERIAL_ICON;

export const CmIconInput: FC<Props> = ({
  id,
  placeholder = '',
  isDisabled = false,
  leftIcon,
  rightIcon,
  value,
  isError,
  onChange,
}) => {
  const inputWrapperClassNames = classNames({
    [styles.inputWrapper]: true,
    [styles.leftIcon]: leftIcon !== undefined,
    [styles.rightIcon]: rightIcon !== undefined,
  });
  const inputClassNames = classNames({
    [styles.cmIconInput]: true,
    [styles.isError]: isError,
    [styles.leftIconInput]: leftIcon !== undefined,
    [styles.rightIconInput]: rightIcon !== undefined,
  });

  return (
    <div className={inputWrapperClassNames}>
      {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
      <input
        {...{ id, value, type: 'text', placeholder, onChange }}
        className={inputClassNames}
        disabled={isDisabled}
      />
      {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
    </div>
  );
};
