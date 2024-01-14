import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const CmMessageCard: FC<Props> = ({ className = '', children }) => {
  const cardClassName = classNames({
    [className]: true,
    [styles.cmMessageCard]: true,
  });
  return <div className={cardClassName}>{children}</div>;
};
