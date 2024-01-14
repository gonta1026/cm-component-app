import React, { FC } from 'react';

type Props = {
  color: string;
};

export const ChevronRightIcon: FC<Props> = ({ color }) => {
  return (
    <svg width={8} height={12} viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M0.589996 10.59L5.17 6L0.589996 1.41L2 0L8 6L2 12L0.589996 10.59Z" />
    </svg>
  );
};
