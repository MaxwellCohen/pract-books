import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { Button } from '@/components/ui/button';
import { SlidersHorizontalIcon, XIcon } from '@/components/ui/icons';
import type { ComponentChildren } from 'preact';

const MobileBookSidebarContext = createContext<{
  close: () => void;
  open: () => void;
} | null>(null);

export function MobileBookSidebar({ children, sidebar }: { children: ComponentChildren; sidebar: ComponentChildren }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileBookSidebarContext.Provider
      value={{
        close: () => setIsOpen(false),
        open: () => setIsOpen(true),
      }}
    >
      {children}
      {isOpen ? (
        <>
          <div
            aria-hidden
            className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] md:hidden"
            onClick={() => setIsOpen(false)}
            style={{ viewTransitionName: 'mobile-sidebar-backdrop' }}
          />
          <aside
            className="border-divider bg-surface dark:border-divider-dark dark:bg-surface-dark fixed inset-y-0 left-0 z-50 flex w-[min(20rem,calc(100vw-3rem))] max-w-full touch-pan-y flex-col overflow-x-hidden border-r pt-[max(1rem,env(safe-area-inset-top))] pr-4 pb-[max(1rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] shadow-2xl md:hidden"
            onClick={event => {
              if ((event.target as HTMLElement).closest('a[href]')) setIsOpen(false);
            }}
            style={{ viewTransitionName: 'mobile-sidebar' }}
          >
            <button
              aria-label="Close filters"
              className="text-muted hover:bg-card focus-visible:ring-accent dark:hover:bg-card-dark absolute top-[max(0.75rem,env(safe-area-inset-top))] right-3 grid size-9 place-items-center rounded-md hover:text-black focus-visible:ring-2 focus-visible:outline-none dark:hover:text-white"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <XIcon className="size-5" />
            </button>
            {sidebar}
          </aside>
        </>
      ) : null}
    </MobileBookSidebarContext.Provider>
  );
}

export function MobileBookSidebarTrigger() {
  const sidebar = useContext(MobileBookSidebarContext);
  if (!sidebar) return null;

  return (
    <Button aria-label="Open filters" className="md:hidden" onClick={sidebar.open} size="icon" variant="ghost">
      <SlidersHorizontalIcon className="size-4" />
    </Button>
  );
}
