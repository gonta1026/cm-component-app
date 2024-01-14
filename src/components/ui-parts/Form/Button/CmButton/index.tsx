import classNames from 'classnames';
import React, { FC, MouseEventHandler, ReactNode } from 'react';
import styles from './styles.module.scss';
import { AddIcon } from '@/components/ui-parts/Icon/AddIcon';

type ButtonStyle = 'solid' | 'outline' | 'solidRed';

type Props = {
  buttonStyle?: ButtonStyle;
  type?: 'button' | 'submit';
  isDisabled?: boolean;
  className?: string;
  prevIcon?: 'add';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export const CmButton: FC<Props> = ({
  buttonStyle = 'solid',
  type = 'button',
  isDisabled = false,
  className = '',
  prevIcon,
  onClick,
  children,
}) => {
  const buttonClassNames = classNames({
    [styles.cmButton]: true,
    [styles[buttonStyle]]: true,
    [styles.prevIcon]: prevIcon !== undefined,
    [styles.isDisabled]: isDisabled,
    [className]: true,
  });

  const prevIconMap = (() => {
    if (prevIcon === undefined) return <></>;
    return {
      add: <AddIcon primaryColor50="#000" className={styles.prev} />,
    }[prevIcon];
  })();
  return (
    <button {...{ onClick, type }} className={buttonClassNames} disabled={isDisabled}>
      {prevIconMap}
      {children}
    </button>
  );
};
