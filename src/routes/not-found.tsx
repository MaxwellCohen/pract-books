import { Link } from '@pracht/core';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';

export function head() {
  return {
    meta: [{ content: 'noindex', name: 'robots' }],
    title: 'Page not found · Pracht Books',
  };
}

export function Component() {
  return (
    <EmptyState body="That page isn't in the catalog." title="Page not found">
      <Link className="mt-1" route="home">
        <Button variant="secondary">Back to the shelf</Button>
      </Link>
    </EmptyState>
  );
}
