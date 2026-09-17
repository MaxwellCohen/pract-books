import { Link } from '@pracht/core';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';

export function BookNotFound() {
  return (
    <EmptyState body="We couldn't find a book with that id." title="Book not found">
      <Link className="mt-1" route="home">
        <Button variant="secondary">Back to the shelf</Button>
      </Link>
    </EmptyState>
  );
}
