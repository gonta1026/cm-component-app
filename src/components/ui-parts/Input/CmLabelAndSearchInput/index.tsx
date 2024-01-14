import React, { ChangeEvent, FC, ReactNode } from 'react';
import { CmSearchInput } from '@/components/ui-parts/Form/Input/CmSearchInput';
import { CmLabel } from '@/components/ui-parts/Form/Label/CmLabel';

type Props = {
  id: string;
  labelName: string;
  className?: string;
  placeholder?: string;
  isDisabled?: boolean;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const CmLabelAndSearchInput: FC<Props> = ({
  id,
  labelName,
  className = '',
  placeholder = '',
  isDisabled = false,
  helperText,
  value,
  errorMessage,
  onChange,
}) => {
  const isError = errorMessage !== undefined;
  return (
    <div {...{ className }}>
      <CmLabel htmlFor={id}>{labelName}</CmLabel>
      <CmSearchInput {...{ id, value, isError, isDisabled, placeholder, onChange }} />
      {helperText}
      {errorMessage}
    </div>
  );
};
