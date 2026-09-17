import { useNavigate, useSearchParams } from '@pracht/core';
import { useState } from 'preact/hooks';
import { catalogSearch, parseSearchParams, type SearchParams } from '@/lib/url-state';

export function useCatalogParams() {
  const searchParams = useSearchParams();
  const navigate = useNavigate();
  const [pending, setPending] = useState(0);
  const current = parseSearchParams(Object.fromEntries(searchParams));

  function replace(next: SearchParams) {
    setPending(count => count + 1);
    void navigate({ route: 'home', search: catalogSearch(next) }, { preserveScroll: true, replace: true }).finally(() => {
      setPending(count => Math.max(0, count - 1));
    });
  }

  return { current, pending: pending > 0, replace };
}
