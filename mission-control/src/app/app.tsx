import { useEffect } from 'react';
import { Header } from '@/widgets/header/ui';
import { StatusCard } from '@/widgets/status-card/ui';
import { SessionsList } from '@/widgets/sessions-list/ui';
import { TasksList } from '@/widgets/tasks-list/ui';
import { QuickActions } from '@/widgets/quick-actions/ui';
import { TokenUsageChart } from '@/widgets/token-chart/ui';
import { fetchSessionsFx, tokenHistoryUpdated } from '@/entities/session/model';
import { fetchTasksFx } from '@/entities/task/model';
import './app.css';

export function App() {
  useEffect(() => {
    // Initial fetch
    fetchSessionsFx();
    fetchTasksFx();

    // Auto-refresh every 5 seconds
    const interval = setInterval(() => {
      fetchSessionsFx();
      
      // Add new data point to chart
      const now = new Date();
      const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
      const tokens = Math.floor(Math.random() * 50000) + 70000;
      tokenHistoryUpdated({ time: timeStr, tokens });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans">
      <Header />
      
      <main className="p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <StatusCard />
          <SessionsList />
          <TasksList />
          <QuickActions />
          <TokenUsageChart />
        </div>
      </main>
    </div>
  );
}

export default App;