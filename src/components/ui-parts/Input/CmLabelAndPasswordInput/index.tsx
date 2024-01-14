import classNames from 'classnames';
import Image from 'next/image';
import React, { ChangeEvent, FC, ReactNode, useState } from 'react';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';
import { CmInput } from '@/components/ui-parts/Form/Input/CmInput';
import styles from './styles.module.scss';
import { CmLabel } from '@/components/ui-parts/Form/Label/CmLabel';

type Props = {
  id: string;
  labelName: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  className?: string;
  helperText?: ReactNode;
  placeholder?: string;
  value: string | number;
  errorMessage?: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const { visibilityOff, visibility } = MATERIAL_ICON;

export const CmLabelAndPasswordInput: FC<Props> = ({
  id,
  labelName,
  isDisabled = false,
  isRequired,
  className = '',
  helperText,
  placeholder,
  value,
  errorMessage,
  onChange,
}) => {
  const [type, setType] = useState<'text' | 'password'>('password');

  const typeMap = {
    text: {
      icon: <Image src={visibility.src} alt={visibility.alt} width={20} height={20} />,
      className: classNames(styles.visibility, styles.on),
      onClick: () => setType('password'),
    },
    password: {
      icon: <Image src={visibilityOff.src} alt={visibilityOff.alt} width={20} height={20} />,
      className: classNames(styles.visibility, styles.off),
      onClick: () => setType('text'),
    },
  }[type];

  return (
    <div {...{ className }}>
      <CmLabel htmlFor={id} {...{ isRequired }}>
        {labelName}
      </CmLabel>
      <div className={styles.inputWrapper}>
        <CmInput {...{ id, value, type, isDisabled, placeholder, onChange }} />
        <button type="button" className={typeMap['className']} onClick={typeMap['onClick']}>
          {typeMap['icon']}
        </button>
      </div>
      {helperText}
      {errorMessage}
    </div>
  );
};
