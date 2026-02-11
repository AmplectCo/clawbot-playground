import { createStore, createEvent, createEffect, sample } from 'effector';
import { Session } from '@/shared/types';

// Events
export const sessionUpdated = createEvent<Session[]>();
export const refreshSessions = createEvent();

// Effects
export const fetchSessionsFx = createEffect(async () => {
  // In real implementation, this would call OpenClaw API
  // For now, using mock data
  return [
    {
      id: '1',
      name: 'Telegram DM (Artemius)',
      status: 'active' as const,
      tokens: 32980,
      lastActivity: 'now',
      contextTokens: 262144,
    },
    {
      id: '2',
      name: 'Terminal (main)',
      status: 'idle' as const,
      tokens: 88905,
      lastActivity: '2h ago',
      contextTokens: 262144,
    },
  ];
});

// Store
export const $sessions = createStore<Session[]>([])
  .on(sessionUpdated, (_, sessions) => sessions)
  .on(fetchSessionsFx.doneData, (_, sessions) => sessions);

// Logic
sample({
  clock: refreshSessions,
  target: fetchSessionsFx,
});