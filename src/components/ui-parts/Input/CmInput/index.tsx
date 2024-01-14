import classNames from 'classnames';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import { SearchIcon } from '@/components/ui-parts/Icon/SearchIcon';
type Props = {
  id?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isError?: ReactNode;
  value?: string | number;
  type?: 'text' | 'password' | 'number';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  showIcon?: boolean;
};

export const CmInput: FC<Props> = ({
  id,
  placeholder = '',
  isDisabled = false,
  showIcon = false,
  value,
  type = 'text',
  isError,
  onChange,
}) => {
  const inputClassNames = classNames({
    [styles.cmInput]: true,
    [styles.showIcon]: showIcon,
    [styles.isError]: isError,
  });
  return (
    <div className={styles.inputWrapper}>
      {showIcon && <SearchIcon color="#ddd" className={styles.searchIcon} />}
      <input {...{ id, value, type, placeholder, onChange }} className={inputClassNames} disabled={isDisabled} />
    </div>
  );
};
