import { useList } from 'effector-react';
import { $sessions } from '@/entities/session/model';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'bg-accent-primary';
    case 'idle': return 'bg-accent-warning';
    default: return 'bg-text-muted';
  }
};

export const SessionsList = () => {
  const sessions = useList($sessions, (session) => (
    <div key={session.id} className="flex justify-between items-center p-4 bg-bg-secondary rounded-lg border-l-4 border-accent-primary">
      <div className="flex flex-col gap-1">
        <span className="font-medium">{session.name}</span>
        <span className="text-xs text-text-muted font-mono">{session.tokens.toLocaleString()} tokens</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${getStatusColor(session.status)}`} />
        <span className="font-mono text-sm text-text-secondary">{session.lastActivity}</span>
      </div>
    </div>
  ));

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 shadow-lg hover:border-accent-primary transition-all duration-200">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        📡 Active Sessions
      </h3>
      <div className="flex flex-col gap-3">{sessions}</div>
    </div>
  );
};