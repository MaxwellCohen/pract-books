import { useIsHydrated } from '@pracht/core';
import { MonitorIcon, MoonIcon, SunIcon } from '@/components/ui/icons';
import { useTheme } from '@/components/theme/theme-provider';
import { cn } from '@/lib/utils';
import type { ComponentChildren } from 'preact';

export function ThemeToggle({ variant = 'pill' }: { variant?: 'inline' | 'pill' }) {
  const { setTheme, theme } = useTheme();
  const hydrated = useIsHydrated();
  const active = hydrated ? theme : undefined;

  return (
    <div
      className={
        variant === 'inline'
          ? 'inline-flex items-center gap-0.5'
          : 'border-divider dark:border-divider-dark inline-flex items-center rounded-full border p-0.5'
      }
      style={{ viewTransitionName: 'theme-toggle' }}
    >
      <ToggleButton active={active === 'light'} label="Light mode" onClick={() => setTheme('light')}>
        <SunIcon className="size-4" />
      </ToggleButton>
      <ToggleButton active={active === 'dark'} label="Dark mode" onClick={() => setTheme('dark')}>
        <MoonIcon className="size-4" />
      </ToggleButton>
      <ToggleButton active={active === 'system'} label="System theme" onClick={() => setTheme('system')}>
        <MonitorIcon className="size-4" />
      </ToggleButton>
    </div>
  );
}

function ToggleButton({
  active,
  children,
  label,
  onClick,
}: {
  active: boolean;
  children: ComponentChildren;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={label}
      aria-pressed={active}
      className={cn(
        'rounded-full p-1.5 transition-colors',
        active
          ? 'bg-card dark:bg-card-dark text-black dark:text-white'
          : 'text-muted hover:text-black dark:hover:text-white',
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
