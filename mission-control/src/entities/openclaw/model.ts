import { createStore, createEvent, createEffect } from 'effector';
import { Session } from '@/shared/types';

export interface OpenClawStatus {
  sessions: Session[];
  totalTokens: number;
  contextUsed: number;
  contextTotal: number;
  model: string;
  version: string;
  timestamp: string;
}

// Events
export const refreshOpenClawData = createEvent();

// Effects
export const fetchOpenClawStatusFx = createEffect(async (): Promise<OpenClawStatus> => {
  // Add cache-busting timestamp
  const timestamp = Date.now();
  
  try {
    const response = await fetch(`/openclaw-data.json?_t=${timestamp}`);
    if (response.ok) {
      return await response.json();
    }
  } catch {
    // Fallback to static data if fetch fails
  }
  
  // Default fallback data (matches real OpenClaw state)
  return {
    sessions: [
      {
        id: '588ebf46',
        name: 'Telegram DM (Artemius)',
        status: 'active',
        tokens: 179011,
        lastActivity: 'now',
        contextTokens: 262144,
      },
      {
        id: '09cda8ca',
        name: 'Terminal (main)',
        status: 'idle',
        tokens: 88905,
        lastActivity: '2h ago',
        contextTokens: 262144,
      },
      {
        id: '79624043',
        name: 'Telegram DM (Alex)',
        status: 'idle',
        tokens: 15440,
        lastActivity: '3h ago',
        contextTokens: 262144,
      },
      {
        id: 'c54fe935',
        name: 'Telegram DM (Egor)',
        status: 'offline',
        tokens: 39110,
        lastActivity: '5h ago',
        contextTokens: 262144,
      },
    ],
    totalTokens: 322466,
    contextUsed: 179011,
    contextTotal: 262144,
    model: 'kimi-coding/k2p5',
    version: '2026.2.6-3',
    timestamp: new Date().toISOString(),
  };
});

// Store
export const $openClawStatus = createStore<OpenClawStatus | null>(null)
  .on(fetchOpenClawStatusFx.doneData, (_, status) => status);

export const $realSessions = createStore<Session[]>([])
  .on(fetchOpenClawStatusFx.doneData, (_, status) => status.sessions);