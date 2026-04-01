import { useState } from 'react';
import './App.css';
import CategoryTabs from './components/CategoryTabs';
import FeaturedProducts from './components/FeaturedProducts';
import BannerSlider from './components/BannerSlider';
import CustomerReviews from './components/CustomerReviews';
import BrowseByBrand from './components/BrowseByBrand';

export default function App() {
  const [activeTab, setActiveTab] = useState('laptops');

  return (
    <div className="store-page">
      <CategoryTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <FeaturedProducts />
      <BannerSlider />
      <CustomerReviews />
      <BrowseByBrand />
      <div className="action-buttons">
        <button className="btn btn--secondary">View More</button>
        <button className="btn btn--secondary">Special Discounts</button>
        <button className="btn btn--primary">Shop Now</button>
      </div>
    </div>
  );
}
