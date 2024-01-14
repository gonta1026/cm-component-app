'use client';
import classNames from 'classnames';
import Image from 'next/image';
import React, { ChangeEvent, FC, useState } from 'react';
import { MATERIAL_ICON } from '@/assets/images/materialIcon';
import styles from './styles.module.scss';
import { CmInput } from '@/components/ui-parts/Input/CmInput';

type Props = {
  id?: string;
  isDisabled?: boolean;
  className?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const { visibilityOff, visibility } = MATERIAL_ICON;

export const CmPasswordInput: FC<Props> = ({ id, isDisabled = false, placeholder, value, onChange }) => {
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
    <div className={styles.inputWrapper}>
      <CmInput {...{ id, value, type, isDisabled, placeholder, onChange }} />
      <button type="button" className={typeMap['className']} onClick={typeMap['onClick']}>
        {typeMap['icon']}
      </button>
    </div>
  );
};
