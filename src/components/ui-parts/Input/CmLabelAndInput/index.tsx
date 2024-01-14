import { CmInput } from '@/components/ui-parts/Input/CmInput';
import { CmLabel } from '@/components/ui-parts/Label/CmLabel';
import React, { ChangeEvent, FC, ReactNode } from 'react';

type Props = {
  id: string;
  labelName: string;
  className?: string;
  placeholder?: string;
  type?: 'text' | 'number';
  isRequired?: boolean;
  isDisabled?: boolean;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CmLabelAndInput: FC<Props> = ({
  id,
  labelName,
  className = '',
  placeholder = '',
  type = 'text',
  helperText,
  isDisabled = false,
  isRequired,
  value,
  errorMessage,
  onChange,
}) => {
  const isError = errorMessage !== undefined;
  return (
    <div {...{ className }}>
      <CmLabel htmlFor={id} {...{ isRequired }}>
        {labelName}
      </CmLabel>
      <CmInput {...{ type, id, value, isError, isDisabled, placeholder, onChange }}></CmInput>
      {helperText}
      {errorMessage}
    </div>
  );
};
