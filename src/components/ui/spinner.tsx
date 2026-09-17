import { SpinnerIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

export function Spinner({ className }: { className?: string }) {
  return <SpinnerIcon className={cn('size-4 shrink-0', className)} />;
}
