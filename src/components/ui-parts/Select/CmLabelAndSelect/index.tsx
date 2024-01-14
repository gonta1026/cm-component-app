import { CmLabel } from '@/components/ui-parts/Label/CmLabel';
import { CmSelect } from '@/components/ui-parts/Select/CmSelect';
import React, { ChangeEvent, FC, ReactNode } from 'react';

type Props = {
  isRequired?: boolean;
  className?: string;
  id: string;
  labelName: string;
  placeholder?: string;
  isDisabled?: boolean;
  helperText?: ReactNode;
  errorMessage?: ReactNode;
  children: ReactNode;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const CmLabelAndSelect: FC<Props> = ({
  isRequired = false,
  className = '',
  id,
  labelName,
  value,
  children,
  onChange,
}) => {
  return (
    <div {...{ className }}>
      <CmLabel {...{ isRequired }} htmlFor={id}>
        {labelName}
      </CmLabel>
      <CmSelect {...{ id, labelName, children, value, onChange }} />
    </div>
  );
};
