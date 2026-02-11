export interface Session {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'offline';
  tokens: number;
  lastActivity: string;
  contextTokens: number;
}

export interface Task {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'in-progress' | 'done';
  assignedBy: string;
  createdAt: string;
}

export interface Activity {
  id: string;
  type: 'commit' | 'message' | 'task' | 'session';
  description: string;
  timestamp: string;
}