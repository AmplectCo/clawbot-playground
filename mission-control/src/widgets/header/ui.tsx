import { useState } from 'react';
import { PanicButton } from '@/features/panic-button/ui';
import { fetchOpenClawStatusFx } from '@/entities/openclaw/model';

export const Header = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchOpenClawStatusFx();
    setLastUpdated(new Date().toLocaleTimeString());
    setIsRefreshing(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-secondary border-b border-border px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-3xl drop-shadow-[0_0_10px_rgba(0,212,170,0.5)]">⚡</span>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              Amp Mission Control
            </h1>
            <p className="text-text-secondary text-sm">Real-time agent monitoring & control</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right mr-2">
            <div className="font-mono text-xl text-accent-primary drop-shadow-[0_0_10px_rgba(0,212,170,0.3)]">
              {lastUpdated}
            </div>
            <div className="text-xs text-text-muted">Last updated</div>
          </div>
          
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`px-4 py-2 bg-bg-card border border-border rounded-lg text-sm font-medium 
              hover:bg-bg-hover hover:border-accent-primary transition-all duration-200
              ${isRefreshing ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isRefreshing ? '🔄' : '↻'} Refresh
          </button>
          
          <PanicButton />
        </div>
      </div>
    </header>
  );
};