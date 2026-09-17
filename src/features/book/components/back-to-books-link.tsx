import { useNavigate, useSearchParams } from '@pracht/core';
import { ArrowLeftIcon } from '@/components/ui/icons';
import { catalogSearch, searchParamsFromUrl } from '@/lib/url-state';
import { cn } from '@/lib/utils';

const linkClass =
  'text-muted hover:bg-card dark:hover:bg-card-dark -ml-1.5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:text-black dark:hover:text-white';

export function BackToBooksLink({ className }: { className?: string }) {
  const navigate = useNavigate();
  const searchParams = useSearchParams();

  return (
    <button
      className={cn(linkClass, className)}
      onClick={() => {
        if (window.navigation?.canGoBack) {
          window.history.back();
          return;
        }
        void navigate({ route: 'home', search: catalogSearch(searchParamsFromUrl(searchParams)) });
      }}
      type="button"
    >
      <ArrowLeftIcon className="size-4" />
      Back to books
    </button>
  );
}
