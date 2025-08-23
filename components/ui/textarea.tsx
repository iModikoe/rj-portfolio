import * as React from 'react';
import clsx from 'clsx';
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        'w-full rounded-lg px-3 py-2 text-sm outline-none border',
        'bg-white border-neutral-300 placeholder-neutral-500',
        'focus:border-cyan-600',
        'dark:bg-neutral-900 dark:border-neutral-700 dark:placeholder-neutral-400',
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';
