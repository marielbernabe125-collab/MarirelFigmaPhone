export default function CategoryTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'laptops', icon: '💻', label: 'Laptops' },
    { id: 'gadgets', icon: '📱', label: 'Gadgets' },
    { id: 'accessories', icon: '🖥️', label: 'Accessories' },
  ];

  return (
    <div className="tab-group">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab${activeTab === tab.id ? ' tab--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <div className="tab__icon-frame">
            <span className="tab__icon">{tab.icon}</span>
          </div>
          <span className="tab__label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
