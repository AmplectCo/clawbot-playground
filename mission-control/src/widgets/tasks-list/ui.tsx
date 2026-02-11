import { useList } from 'effector-react';
import { $tasks } from '@/entities/task/model';

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'text-accent-danger';
    case 'medium': return 'text-accent-warning';
    case 'low': return 'text-accent-primary';
    default: return 'text-text-muted';
  }
};

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-accent-warning/20 text-accent-warning';
    case 'in-progress':
      return 'bg-accent-secondary/20 text-accent-secondary';
    case 'done':
      return 'bg-accent-primary/20 text-accent-primary';
    default:
      return 'bg-text-muted/20 text-text-muted';
  }
};

export const TasksList = () => {
  const tasks = useList($tasks, (task) => (
    <div 
      key={task.id} 
      className={`p-4 bg-bg-secondary rounded-lg border-l-4 ${
        task.status === 'done' ? 'border-accent-primary opacity-70' : 'border-accent-warning'
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="font-medium">{task.title}</span>
        <span className={`text-xs font-semibold uppercase ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
      </div>
      <div className="flex justify-between items-center text-xs text-text-secondary">
        <span className="font-mono">by {task.assignedBy}</span>
        <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${getStatusBadgeClass(task.status)}`}>
          {task.status}
        </span>
      </div>
    </div>
  ));

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 shadow-lg hover:border-accent-primary transition-all duration-200">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        📋 Task Queue
      </h3>
      <div className="flex flex-col gap-3">{tasks}</div>
    </div>
  );
};