import { cn } from '@/lib/utils';
import type { JSX } from 'preact';

export function Skeleton({ className, style }: { className?: string; style?: JSX.CSSProperties }) {
  return <span aria-hidden className={cn('skeleton-animation block', className)} style={style} />;
}
