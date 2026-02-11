import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const sessions = [
    { id: '1', name: 'Telegram DM (Artemius)', status: 'active', tokens: 32980, lastActivity: 'now' },
    { id: '2', name: 'Terminal (main)', status: 'idle', tokens: 88905, lastActivity: '2h ago' },
  ]

  const tasks = [
    { id: '1', title: 'Create Mission Control dashboard', priority: 'high', status: 'in-progress', assignedBy: 'Artemius' },
    { id: '2', title: 'Setup GitHub integration', priority: 'high', status: 'done', assignedBy: 'Artemius' },
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <div>
            <h1>Amp Mission Control</h1>
            <span className="subtitle">Real-time agent monitoring & control</span>
          </div>
        </div>
        <div className="header-actions">
          <div className="time mono">{currentTime.toLocaleTimeString()}</div>
          <button className="panic-btn">🚨 PANIC</button>
        </div>
      </header>

      <main className="dashboard">
        <div className="grid">
          <div className="card status-card">
            <h3>🟢 System Status</h3>
            <div className="status-indicator">
              <span className="pulse"></span>
              <span>Online & Ready</span>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-value">2</span>
                <span className="stat-label">Active Sessions</span>
              </div>
              <div className="stat">
                <span className="stat-value">121K</span>
                <span className="stat-label">Tokens Used</span>
              </div>
            </div>
          </div>

          <div className="card sessions-card">
            <h3>📡 Active Sessions</h3>
            <div className="session-list">
              {sessions.map(session => (
                <div key={session.id} className="session-item">
                  <div className="session-info">
                    <span className="session-name">{session.name}</span>
                    <span className="session-meta mono">{session.tokens.toLocaleString()} tokens</span>
                  </div>
                  <div className="session-status">
                    <span className="status-dot active"/>
                    <span className="mono">{session.lastActivity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card tasks-card">
            <h3>📋 Task Queue</h3>
            <div className="task-list">
              {tasks.map(task => (
                <div key={task.id} className={`task-item ${task.status}`}>
                  <div className="task-header">
                    <span className="task-title">{task.title}</span>
                    <span className="task-priority">{task.priority}</span>
                  </div>
                  <div className="task-meta">
                    <span className="mono">by {task.assignedBy}</span>
                    <span className={`task-status-badge ${task.status}`}>{task.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card actions-card">
            <h3>⚡ Quick Actions</h3>
            <div className="action-grid">
              <button className="action-btn">📧 Check Email</button>
              <button className="action-btn">🔄 Compact Context</button>
              <button className="action-btn">📝 Update Docs</button>
              <button className="action-btn">🔍 Review PRs</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App