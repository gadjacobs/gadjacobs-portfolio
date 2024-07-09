import * as React from 'react';

export interface IContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Container(props: IContainerProps) {
  return (
    <div
      className={`border p-6 rounded-2xl border-gray-400 bg-gray-50 dark:bg-gray-950 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
