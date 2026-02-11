# Amp Mission Control

Real-time dashboard for monitoring and controlling Amp (OpenClaw agent).

🔗 **Live Demo:** https://amplectco.github.io/clawbot-playground/

## Features

- 📊 **Real-time Token Usage Chart** — Visualize token consumption over time
- 📡 **Active Sessions Monitor** — Track all active OpenClaw sessions
- 📋 **Task Queue** — Manage and track assigned tasks
- ⚡ **Quick Actions** — One-click commands (Check Email, Compact Context, etc.)
- 🚨 **Panic Button** — Emergency mode with visual feedback
- 🔄 **Auto-refresh** — Data updates every 5 seconds

## Tech Stack

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS v3
- **State Management:** Effector
- **Charts:** Recharts
- **Build Tool:** Vite
- **Architecture:** Feature-Sliced Design (FSD)

## Project Structure

```
src/
├── app/           # App initialization, providers, styles
├── widgets/       # Independent UI blocks (Header, StatusCard, SessionsList...)
├── features/      # User scenarios (PanicButton)
├── entities/      # Business entities (Session, Task)
├── shared/        # API, UI-kit, utils
└── pages/         # Page components
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Health check
./scripts/health-check.sh
```

## CI/CD

Automatic deployment on every push to `main` branch via GitHub Actions.

## Health Monitoring

```bash
# Manual health check
curl -s https://amplectco.github.io/clawbot-playground/ | head -1
```

## License

MIT