const products = [
  {
    id: 1,
    name: 'UltraBook X1',
    price: '₱25,999',
    imageUrl: 'https://static.codia.ai/api/image-service/proxy/files/llmcode/da3b67/f1b331.png',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Smart Phone Pro',
    price: '₱32,999',
    imageUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-d99b5b781d924f2a.png',
    badge: null,
  },
  {
    id: 3,
    name: 'GameMaster 3000',
    price: '₱12,999',
    imageUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-15dcb8a10cb165a6.png',
    badge: null,
  },
  {
    id: 4,
    name: 'SoundMax Pro',
    price: '₱5,999',
    imageUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-7eee9e934a8450ee.png',
    badge: null,
  },
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.imageUrl} alt={product.name} className="product-card__image" />
      </div>
      <div className="product-card__content">
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">{product.price}</p>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 4);

  return (
    <section className="featured-section">
      <div className="section-header">
        <h2 className="section-title">Featured Products</h2>
        {products[0] && <span className="badge-best-seller">Best Seller</span>}
      </div>
      <div className="products-row">
        {firstRow.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <div className="products-row">
        {secondRow.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
