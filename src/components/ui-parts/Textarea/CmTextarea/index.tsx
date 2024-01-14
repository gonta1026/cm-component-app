import classNames from 'classnames';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type Props = {
  id?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isError?: ReactNode;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const CmTextarea: FC<Props> = ({
  id,
  placeholder = '',
  isDisabled = false,
  isError = false,
  value,
  onChange,
}) => {
  const inputClassNames = classNames({
    [styles.cmTextarea]: true,
    [styles.isError]: isError,
  });
  return <textarea className={inputClassNames} disabled={isDisabled} {...{ id, value, placeholder, onChange }} />;
};
