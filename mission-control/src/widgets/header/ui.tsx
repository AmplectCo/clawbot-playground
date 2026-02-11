import { PanicButton } from '@/features/panic-button/ui';

export const Header = () => {
  const currentTime = new Date().toLocaleTimeString();

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
          <div className="font-mono text-xl text-accent-primary drop-shadow-[0_0_10px_rgba(0,212,170,0.3)]">
            {currentTime}
          </div>
          <PanicButton />
        </div>
      </div>
    </header>
  );
};