import { useStore } from 'effector-react';
import { $openClawStatus } from '@/entities/openclaw/model';

export const StatusCard = () => {
  const status = useStore($openClawStatus);
  
  if (!status) return <div className="bg-bg-card border border-border rounded-xl p-6">Loading...</div>;

  const contextPercent = Math.round((status.contextUsed / status.contextTotal) * 100);

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 shadow-lg hover:border-accent-primary transition-all duration-200">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        🟢 System Status
        <span className="text-xs text-text-muted font-normal">{status.version}</span>
      </h3>
      
      <div className="flex items-center gap-3 mb-6 p-4 bg-accent-primary/10 rounded-lg border border-accent-primary/30">
        <span className="w-3 h-3 bg-accent-primary rounded-full animate-pulse" />
        <div className="flex-1">
          <span className="block">Online & Ready</span>
          <span className="text-xs text-text-muted font-mono">{status.model}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-bg-secondary rounded-lg">
          <span className="block text-3xl font-bold text-accent-primary">{status.sessions.length}</span>
          <span className="text-xs text-text-secondary uppercase tracking-wider">Active Sessions</span>
        </div>
        
        <div className="text-center p-4 bg-bg-secondary rounded-lg">
          <span className="block text-3xl font-bold text-accent-primary">{Math.round(status.totalTokens / 1000)}K</span>
          <span className="text-xs text-text-secondary uppercase tracking-wider">Total Tokens</span>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-bg-secondary rounded-lg">
        <div className="flex justify-between text-xs text-text-secondary mb-1">
          <span>Context Usage</span>
          <span className="font-mono">{contextPercent}%</span>
        </div>
        <div className="h-2 bg-bg-hover rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent-primary transition-all duration-500"
            style={{ width: `${contextPercent}%` }}
          />
        </div>
        <div className="mt-1 text-xs text-text-muted font-mono text-right">
          {status.contextUsed.toLocaleString()} / {status.contextTotal.toLocaleString()}
        </div>
      </div>
    </div>
  );
};