import * as React from 'react';
import clsx from 'clsx';

export function Button({
  className,
  variant = 'default',
  ...props
}: { className?: string; variant?: 'default' | 'secondary' | 'outline' | 'ghost' } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const c = clsx(
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition border',
    variant === 'default'   && 'bg-cyan-600 text-white border-cyan-700 hover:bg-cyan-500',
    variant === 'secondary' && 'bg-neutral-100 border-neutral-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700',
    variant === 'outline'   && 'bg-transparent border-neutral-300 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800',
    variant === 'ghost'     && 'bg-transparent border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800',
    className
  );
  return <button className={c} {...props} />;
}
