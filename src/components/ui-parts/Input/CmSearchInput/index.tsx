import classNames from 'classnames';
import Image from 'next/image';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';
import styles from './styles.module.scss';

type Props = {
  id: string;
  placeholder?: string;
  isDisabled?: boolean;
  isError?: ReactNode;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const { search } = MATERIAL_ICON;

export const CmSearchInput: FC<Props> = ({ id, placeholder = '', isDisabled = false, value, isError, onChange }) => {
  const inputClassNames = classNames({
    [styles.cmSearchInput]: true,
    [styles.isError]: isError,
  });
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.icon}>
        <Image src={search.src} alt={search.alt} width={18} height={18} />
      </div>
      <input
        {...{ id, value, type: 'text', placeholder, onChange }}
        className={inputClassNames}
        disabled={isDisabled}
      />
    </div>
  );
};
