import { Link } from '@pracht/core';
import { BookMark } from '@/components/book-mark';
import { useCatalogParams } from '@/hooks/use-catalog-params';
import { catalogSearch } from '@/lib/url-state';

const linkClass = 'inline-flex items-center gap-2 text-base font-semibold tracking-tight';

export function HomeLink() {
  const { current } = useCatalogParams();

  return (
    <Link aria-label="Pracht Books home" className={linkClass} route="home" search={catalogSearch({ delay: current.delay })}>
      <BookMark className="text-action size-5" />
      Pracht Books
    </Link>
  );
}
