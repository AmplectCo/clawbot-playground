import { createStore, createEvent, createEffect } from 'effector';
import { Task } from '@/shared/types';

export const taskAdded = createEvent<Task>();
export const taskUpdated = createEvent<{ id: string; status: Task['status'] }>();
export const refreshTasks = createEvent();

export const fetchTasksFx = createEffect(async () => {
  return [
    {
      id: '1',
      title: 'Create Mission Control dashboard',
      priority: 'high' as const,
      status: 'in-progress' as const,
      assignedBy: 'Artemius',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Setup GitHub integration',
      priority: 'high' as const,
      status: 'done' as const,
      assignedBy: 'Artemius',
      createdAt: new Date().toISOString(),
    },
  ];
});

export const $tasks = createStore<Task[]>([])
  .on(fetchTasksFx.doneData, (_, tasks) => tasks)
  .on(taskAdded, (state, task) => [...state, task])
  .on(taskUpdated, (state, { id, status }) =>
    state.map(task => task.id === id ? { ...task, status } : task)
  );