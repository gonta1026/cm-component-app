import classNames from 'classnames';
import React, { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './styles.module.scss';
import { COLOR } from '@/styles/const';

type Variant = 'solid' | 'outline';

type Props = {
  variant?: Variant;
  isDisabled?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  type?: 'button' | 'submit';
  children: ReactNode;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CmButton: FC<Props> = ({
  variant = 'outline',
  isDisabled = false,
  className = '',
  color = COLOR.PRIMARY,
  leftIcon,
  rightIcon,
  type = 'button',
  children,
  onClick,
}) => {
  const buttonClassNames = classNames({
    [styles.cmButton]: true,
    [styles[variant]]: true,
    [styles.isDisabled]: isDisabled,
    [className]: true,
  });

  const style = {
    solid: {
      backgroundColor: 'transparent',
      border: `1px solid ${color}`,
      color: color,
    },
    outline: {
      backgroundColor: color,
      border: undefined,
      color: '#fff',
    },
  }[variant];

  return (
    <button {...{ onClick, style, type }} className={buttonClassNames} disabled={isDisabled}>
      <span className={styles.leftIcon}>{leftIcon}</span>
      <span>{children}</span>
      <span className={styles.rightIcon}>{rightIcon}</span>
    </button>
  );
};
