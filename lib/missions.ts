export interface MissionMeta {
  id: string; // matches the section's DOM id, e.g. "m1"
  emoji: string;
  title: string;
}

/** Single source of truth for mission order, used by the nav panel, the
 * progress bar label, and scroll-spy. The mission bodies themselves live in
 * components/missions/Mission1.tsx…Mission14.tsx — this file only tracks
 * "what order are we in and what do we call each one." */
export const MISSIONS: MissionMeta[] = [
  { id: 'm1', emoji: '🚀', title: "Why Don't We Fall Off Earth?" },
  { id: 'm2', emoji: '🌗', title: 'What Is the Moon?' },
  { id: 'm3', emoji: '⭐', title: 'The Sky Is a Time Machine' },
  { id: 'm4', emoji: '🔵', title: 'Why Is the Sky Blue?' },
  { id: 'm5', emoji: '🌞', title: 'Meet the Stars' },
  { id: 'm6', emoji: '🍂', title: 'Why Do We Have Seasons?' },
  { id: 'm7', emoji: '🧍', title: 'How Small Are You?' },
  { id: 'm8', emoji: '🌌', title: 'How Big Is the Universe?' },
  { id: 'm9', emoji: '🕳️', title: "Black Holes Explained Like You're 5" },
  { id: 'm10', emoji: '🕳️', title: 'Falling Into a Black Hole' },
  { id: 'm11', emoji: '👽', title: 'Could Aliens Exist?' },
  { id: 'm12', emoji: '🌀', title: 'How Fast Are You Actually Moving?' },
  { id: 'm13', emoji: '☀️', title: 'What If the Sun Disappeared?' },
  { id: 'm14', emoji: '🚀', title: 'The End of Everything' },
];
