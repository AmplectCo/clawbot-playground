import { useUnit } from 'effector-react';
import { $sessions } from '@/entities/session/model';

export const StatusCard = () => {
  const sessions = useUnit($sessions);
  const totalTokens = sessions.reduce((acc, s) => acc + s.tokens, 0);

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 shadow-lg hover:border-accent-primary transition-all duration-200">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        🟢 System Status
      </h3>
      
      <div className="flex items-center gap-3 mb-6 p-4 bg-accent-primary/10 rounded-lg border border-accent-primary/30">
        <span className="w-3 h-3 bg-accent-primary rounded-full animate-pulse" />
        <span>Online & Ready</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-bg-secondary rounded-lg">
          <span className="block text-3xl font-bold text-accent-primary">{sessions.length}</span>
          <span className="text-xs text-text-secondary uppercase tracking-wider">Active Sessions</span>
        </div>
        
        <div className="text-center p-4 bg-bg-secondary rounded-lg">
          <span className="block text-3xl font-bold text-accent-primary">
            {totalTokens > 1000 ? `${Math.round(totalTokens / 1000)}K` : totalTokens}
          </span>
          <span className="text-xs text-text-secondary uppercase tracking-wider">Tokens Used</span>
        </div>
      </div>
    </div>
  );
};