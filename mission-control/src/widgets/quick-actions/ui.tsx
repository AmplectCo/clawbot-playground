export const QuickActions = () => {
  const actions = [
    { icon: '📧', label: 'Check Email', onClick: () => console.log('Check Email') },
    { icon: '🔄', label: 'Compact Context', onClick: () => console.log('Compact Context') },
    { icon: '📝', label: 'Update Docs', onClick: () => console.log('Update Docs') },
    { icon: '🔍', label: 'Review PRs', onClick: () => console.log('Review PRs') },
  ];

  return (
    <div className="bg-bg-card border border-border rounded-xl p-6 shadow-lg hover:border-accent-primary transition-all duration-200">
      <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
        ⚡ Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            className="p-4 bg-bg-secondary border border-border rounded-lg text-left text-sm text-text-primary hover:bg-bg-hover hover:border-accent-primary hover:-translate-y-0.5 transition-all duration-200"
          >
            {action.icon} {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};