const brands = [
  { id: 'dell', icon: '🧳', name: 'Dell' },
  { id: 'apple', icon: '🍏', name: 'Apple' },
  { id: 'hp', icon: '🖥️', name: 'HP' },
  { id: 'samsung', icon: '📱', name: 'Samsung' },
];

function BrandChip({ brand }) {
  return (
    <button className="brand-chip">
      <div className="brand-chip__icon-frame">
        <span className="brand-chip__icon">{brand.icon}</span>
      </div>
      <span className="brand-chip__name">{brand.name}</span>
    </button>
  );
}

export default function BrowseByBrand() {
  const topRow = brands.slice(0, 2);
  const bottomRow = brands.slice(2, 4);

  return (
    <section className="brands-section">
      <div className="section-header">
        <h2 className="section-title">Browse By Brand</h2>
      </div>
      <div className="brands-grid">
        <div className="brands-row">
          {topRow.map((brand) => (
            <BrandChip key={brand.id} brand={brand} />
          ))}
        </div>
        <div className="brands-row">
          {bottomRow.map((brand) => (
            <BrandChip key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
