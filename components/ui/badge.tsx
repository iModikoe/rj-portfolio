import * as React from 'react';
import clsx from 'clsx';
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-lg px-2.5 py-1 text-xs border',
        'bg-neutral-100 border-neutral-200',
        'dark:bg-neutral-800 dark:border-neutral-700',
        className
      )}
      {...props}
    />
  );
}
