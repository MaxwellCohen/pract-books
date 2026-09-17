import { Link } from '@pracht/core';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icons';
import { Skeleton } from '@/components/ui/skeleton';
import { catalogSearch, getCurrentPage, getTotalPages, withPage } from '@/lib/url-state';
import type { SearchParams } from '@/lib/url-state';
import { cn } from '@/lib/utils';

const stepClass =
  'text-muted hover:bg-card dark:hover:bg-card-dark focus-visible:ring-action/40 inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-sm font-medium transition-colors hover:text-black focus-visible:ring-2 focus-visible:outline-none dark:hover:text-white';

export function BookPagination({
  searchParams,
  totalResults,
}: {
  searchParams: SearchParams;
  totalResults: number;
}) {
  const totalPages = getTotalPages(totalResults);
  const currentPage = getCurrentPage(searchParams, totalPages);
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between gap-4">
      {hasPrevious ? (
        <Link
          aria-label="Previous page"
          className={stepClass}
          preserveScroll
          route="home"
          search={catalogSearch(withPage(searchParams, currentPage - 1))}
        >
          <ChevronLeftIcon className="size-4" />
          Previous
        </Link>
      ) : (
        <span aria-disabled className={cn(stepClass, 'pointer-events-none opacity-40')}>
          <ChevronLeftIcon className="size-4" />
          Previous
        </span>
      )}

      <p className="text-muted flex items-center gap-2 text-xs tabular-nums sm:text-sm">
        <span className="hidden sm:inline">
          <span className="font-medium text-black dark:text-white">{totalResults.toLocaleString()}</span> books
        </span>
        <span aria-hidden className="bg-divider dark:bg-divider-dark hidden h-3 w-px sm:block" />
        <span>
          Page {currentPage.toLocaleString()} of {totalPages.toLocaleString()}
        </span>
      </p>

      {hasNext ? (
        <Link
          aria-label="Next page"
          className={stepClass}
          preserveScroll
          route="home"
          search={catalogSearch(withPage(searchParams, currentPage + 1))}
        >
          Next
          <ChevronRightIcon className="size-4" />
        </Link>
      ) : (
        <span aria-disabled className={cn(stepClass, 'pointer-events-none opacity-40')}>
          Next
          <ChevronRightIcon className="size-4" />
        </span>
      )}
    </nav>
  );
}

export function BookPaginationSkeleton() {
  return (
    <div aria-hidden className="flex items-center justify-between gap-4">
      <span className={cn(stepClass, 'pointer-events-none opacity-40')}>
        <ChevronLeftIcon className="size-4" />
        Previous
      </span>
      <div className="flex items-center gap-2">
        <Skeleton className="skeleton-subtle hidden h-4 w-20 sm:block" />
        <span className="bg-divider dark:bg-divider-dark hidden h-3 w-px sm:block" />
        <Skeleton className="skeleton-subtle h-4 w-20" />
      </div>
      <span className={cn(stepClass, 'pointer-events-none opacity-40')}>
        Next
        <ChevronRightIcon className="size-4" />
      </span>
    </div>
  );
}
