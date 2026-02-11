import { createEvent, createStore } from 'effector';

export const panicActivated = createEvent();
export const panicResolved = createEvent();

export const $isPanicking = createStore(false)
  .on(panicActivated, () => true)
  .on(panicResolved, () => false);

// Auto-resolve after 3 seconds
$isPanicking.watch(isPanicking => {
  if (isPanicking) {
    setTimeout(() => panicResolved(), 3000);
  }
});