import classNames from 'classnames';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import { CmLabel } from '@/components/ui-parts/Label/CmLabel';

type Props = {
  id: string;
  className: string;
  labelName: string;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isError?: ReactNode;
  value: string | number;
  type: 'text' | 'password' | 'number';
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  showIcon?: boolean;
};

export const CmLabelAndTextarea: FC<Props> = ({
  id,
  labelName,
  className,
  placeholder = '',
  isDisabled = false,
  isRequired,
  showIcon = false,
  value,
  isError,
  onChange,
}) => {
  const inputClassNames = classNames({
    [styles.cmTextarea]: true,
    // [styles.isError]: isError,
  });
  return (
    <div className={classNames(className, styles.textareaWrapper)}>
      <CmLabel htmlFor={id} {...{ isRequired }}>
        {labelName}
      </CmLabel>
      <textarea className={inputClassNames} {...{ id, placeholder, onChange }} disabled={isDisabled} value={value} />
    </div>
  );
};
