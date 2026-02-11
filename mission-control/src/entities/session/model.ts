import { createStore, createEvent, createEffect, sample } from 'effector';
import { Session } from '@/shared/types';

export interface TokenDataPoint {
  time: string;
  tokens: number;
}

// Events
export const sessionUpdated = createEvent<Session[]>();
export const refreshSessions = createEvent();
export const tokenHistoryUpdated = createEvent<TokenDataPoint>();

// Effects
export const fetchSessionsFx = createEffect(async () => {
  // In real implementation, this would call OpenClaw API
  return [
    {
      id: '1',
      name: 'Telegram DM (Artemius)',
      status: 'active' as const,
      tokens: Math.floor(Math.random() * 50000) + 20000,
      lastActivity: 'now',
      contextTokens: 262144,
    },
    {
      id: '2',
      name: 'Terminal (main)',
      status: 'idle' as const,
      tokens: Math.floor(Math.random() * 80000) + 50000,
      lastActivity: '2h ago',
      contextTokens: 262144,
    },
  ];
});

// Stores
export const $sessions = createStore<Session[]>([])
  .on(sessionUpdated, (_, sessions) => sessions)
  .on(fetchSessionsFx.doneData, (_, sessions) => sessions);

export const $tokenHistory = createStore<TokenDataPoint[]>([
  { time: '10:00', tokens: 45000 },
  { time: '11:00', tokens: 52000 },
  { time: '12:00', tokens: 48000 },
  { time: '13:00', tokens: 61000 },
  { time: '14:00', tokens: 58000 },
  { time: '15:00', tokens: 72000 },
  { time: '16:00', tokens: 68000 },
  { time: '17:00', tokens: 85000 },
  { time: '18:00', tokens: 121000 },
]).on(tokenHistoryUpdated, (state, point) => [...state.slice(-20), point]);

// Logic
sample({
  clock: refreshSessions,
  target: fetchSessionsFx,
});