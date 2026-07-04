'use client';

import { useState } from 'react';
import { burstConfetti, mascotSay } from '@/lib/effects';

interface QuizOption { label: string; correct: boolean }

export default function Quiz({ prompt, options }: { prompt: string; options: QuizOption[] }) {
  const [done, setDone] = useState(false);
  const [wrongIdx, setWrongIdx] = useState<number | null>(null);

  function pick(opt: QuizOption, i: number) {
    if (done) return;
    if (opt.correct) {
      setDone(true);
      burstConfetti();
      mascotSay("Correct! You're getting it 🎉");
    } else {
      setWrongIdx(i);
      mascotSay('Not quite — try again! 🤔');
      setTimeout(() => setWrongIdx(null), 800);
    }
  }

  return (
    <div className="glass mt-10" style={{ padding: '1.6rem', borderRadius: 22, maxWidth: 560 }}>
      <p className="font-display text-xl mb-3">⚡ Quick quiz</p>
      <p className="mb-4" style={{ color: 'var(--muted)' }}>{prompt}</p>
      <div>
        {options.map((opt, i) => (
          <button
            key={i}
            className={`quiz-opt${done && opt.correct ? ' correct' : ''}${wrongIdx === i ? ' wrong' : ''}`}
            onClick={() => pick(opt, i)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
