'use client';

import { useState } from 'react';

export default function RevealBox({
  prompt,
  children,
  className = 'reveal-box glass card-lift',
  style,
}: {
  prompt: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={className} style={style} onClick={() => setOpen((o) => !o)}>
      <p style={{ fontWeight: 600 }}>
        {prompt} <span style={{ color: 'var(--electric-blue)' }}>(tap)</span>
      </p>
      <div className={`reveal-answer mt-2${open ? ' show' : ''}`} style={{ color: 'var(--muted)' }}>
        {children}
      </div>
    </div>
  );
}
