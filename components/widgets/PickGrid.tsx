'use client';

import { useState } from 'react';
import { sparkleAtElement } from '@/lib/effects';

export interface PickItem {
  key: string;
  display: React.ReactNode; // what's shown on the tile itself (emoji, orb, label)
  resultTitle: string;
  resultBody: string;
  tileStyle?: React.CSSProperties;
}

export default function PickGrid({
  items,
  placeholder,
  gridClassName = 'grid sm:grid-cols-2 lg:grid-cols-4 gap-3',
  hoverToPreview = false,
  resultBodyColor = 'var(--muted)',
}: {
  items: PickItem[];
  placeholder: string;
  gridClassName?: string;
  hoverToPreview?: boolean;
  resultBodyColor?: string;
}) {
  const [selected, setSelected] = useState<PickItem | null>(null);

  function choose(item: PickItem, el?: HTMLElement) {
    setSelected(item);
    if (el) sparkleAtElement(el);
  }

  return (
    <>
      <div className={`${gridClassName} mt-5`}>
        {items.map((item) => (
          <button
            key={item.key}
            className="glass card-lift"
            style={{ padding: '1.1rem', borderRadius: 16, textAlign: 'center', cursor: 'pointer', ...item.tileStyle }}
            onMouseEnter={hoverToPreview ? () => setSelected(item) : undefined}
            onClick={(e) => choose(item, e.currentTarget)}
          >
            {item.display}
          </button>
        ))}
      </div>
      <div
        className="glass-strong mt-5"
        style={{ padding: '1.1rem 1.2rem', borderRadius: 16, textAlign: 'center', opacity: selected ? 1 : 0.6 }}
      >
        {selected ? (
          <>
            <p style={{ fontSize: '1.05rem' }}><b>{selected.resultTitle}</b></p>
            <p className="mt-1" style={{ color: resultBodyColor, fontWeight: 600 }}>{selected.resultBody}</p>
          </>
        ) : (
          <p style={{ color: 'var(--muted)' }}>{placeholder}</p>
        )}
      </div>
    </>
  );
}
