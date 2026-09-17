import { cn } from '@/lib/utils';
import type { ComponentChildren, JSX } from 'preact';

type Variant = 'ghost' | 'primary' | 'secondary';
type Size = 'default' | 'icon' | 'sm';

type Props = {
  children: ComponentChildren;
  className?: string;
  variant?: Variant;
  size?: Size;
} & Omit<JSX.IntrinsicElements['button'], 'className' | 'size'>;

const base =
  'focus-visible:ring-action/40 inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50';

const sizes: Record<Size, string> = {
  default: 'h-9 px-4 text-sm',
  icon: 'size-9',
  sm: 'h-8 px-3 text-xs',
};

const variants: Record<Variant, string> = {
  ghost: 'text-muted hover:bg-card hover:text-black dark:hover:bg-card-dark dark:hover:text-white',
  primary: 'bg-action text-white hover:bg-action-hover',
  secondary:
    'border-divider hover:border-gray/40 hover:bg-card dark:border-divider-dark dark:hover:border-gray/30 dark:hover:bg-card-dark border bg-white text-black dark:bg-transparent dark:text-white',
};

export function buttonClasses({
  className,
  size = 'default',
  variant = 'primary',
}: { className?: string; size?: Size; variant?: Variant } = {}) {
  return cn(base, sizes[size], variants[variant], className);
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  className,
  type = 'button',
  ...props
}: Props) {
  return (
    <button className={buttonClasses({ className, size, variant })} type={type} {...props}>
      {children}
    </button>
  );
}
