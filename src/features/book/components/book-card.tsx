import { Link } from '@pracht/core';
import type { BookSummary } from '@/features/book/book-queries';
import { BookCover, BookCoverSkeleton } from '@/features/book/components/book-cover';
import { catalogSearch, type SearchParams } from '@/lib/url-state';

const GRID_SIZES =
  '(min-width: 1280px) 14vw, (min-width: 1024px) 16vw, (min-width: 768px) 20vw, (min-width: 640px) 25vw, 33vw';

type Props = {
  book: BookSummary;
  eagerPrefetch: boolean;
  priority: boolean;
  searchParams: SearchParams;
};

export function BookCard({ book, eagerPrefetch, priority, searchParams }: Props) {
  return (
    <Link
      className="focus-visible:ring-action focus-visible:ring-offset-surface dark:focus-visible:ring-offset-surface-dark group relative block rounded-md transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      params={{ id: String(book.id) }}
      prefetch={eagerPrefetch ? 'viewport' : 'intent'}
      route="book"
      search={catalogSearch(searchParams)}
    >
      <BookCover
        className="group-hover:shadow-soft transition-shadow"
        priority={priority}
        sizes={GRID_SIZES}
        src={book.image_url}
        thumbhash={book.thumbhash}
        title={book.title}
      />
      <span className="sr-only">{book.title}</span>
    </Link>
  );
}

export function BookCardSkeleton() {
  return <BookCoverSkeleton />;
}
