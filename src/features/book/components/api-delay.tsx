import { useState } from 'preact/hooks';
import { Range } from '@/components/ui/range';
import { useCatalogParams } from '@/hooks/use-catalog-params';
import { API_DELAY_VALUES, formatApiDelay, getApiDelayMs } from '@/lib/url-state';

export function ApiDelay({ idPrefix }: { idPrefix: string }) {
  const { current, pending, replace } = useCatalogParams();
  const committed = getApiDelayMs(current);
  const [value, setValue] = useState(committed);

  function commit(next: number) {
    setValue(next);
    const params = { ...current, delay: next === 0 ? undefined : String(next) };
    if (!params.delay) delete params.delay;
    replace(params);
  }

  return (
    <div data-filtering={pending ? '' : undefined}>
      <Range
        hint={
          <>
            <span>Off</span>
            <span>3s</span>
          </>
        }
        id={`${idPrefix}-api-delay`}
        label="API delay"
        onValueChange={commit}
        readout={formatApiDelay(value)}
        value={value}
        values={API_DELAY_VALUES}
      />
    </div>
  );
}
