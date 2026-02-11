import { useUnit } from 'effector-react';
import { panicActivated, $isPanicking } from './model';

export const PanicButton = () => {
  const [isPanicking, activatePanic] = useUnit([$isPanicking, panicActivated]);

  return (
    <button
      onClick={activatePanic}
      className={`
        px-6 py-3 rounded-lg font-bold text-white transition-all duration-200
        ${isPanicking 
          ? 'bg-red-600 animate-pulse scale-105' 
          : 'bg-gradient-to-r from-red-500 to-red-400 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30'
        }
      `}
    >
      {isPanicking ? '🚨 PANIC MODE!' : '🚨 PANIC'}
    </button>
  );
};