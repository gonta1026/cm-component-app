import classNames from 'classnames';
import Image from 'next/image';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';
import styles from './styles.module.scss';

type Props = {
  id: string;
  className?: string;
  placeholder?: string;
  isDisabled?: boolean;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  children: ReactNode;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const { expandMore } = MATERIAL_ICON;

export const CmSelect: FC<Props> = ({
  id,
  className = '',
  placeholder = '',
  isDisabled = false,
  helperText,
  value,
  errorMessage,
  children,
  onChange,
}) => {
  const wrapperClassNames = classNames(styles.cmSelectWrapper, className);
  const selectClassNames = classNames({
    [styles.cmSelect]: true,
    [styles.isError]: errorMessage !== undefined,
  });
  return (
    <div className={wrapperClassNames}>
      <select {...{ id, value, placeholder, onChange }} className={selectClassNames} disabled={isDisabled}>
        {children}
      </select>
      <div className={styles.selectArrow}>
        <Image src={expandMore.src} width={12} height={7} alt={expandMore.alt} />
      </div>
      {helperText}
      {errorMessage}
    </div>
  );
};
