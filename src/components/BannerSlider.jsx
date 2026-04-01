import { useState } from 'react';

const slides = [
  { id: 0, imageUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-1a5292246cdacabb.png' },
  { id: 1, imageUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-1a5292246cdacabb.png' },
  { id: 2, imageUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-1a5292246cdacabb.png' },
  { id: 3, imageUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-1a5292246cdacabb.png' },
];

export default function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="banner-slider">
      <div className="banner-slider__image-wrap">
        <img
          src={slides[activeIndex].imageUrl}
          alt="Banner"
          className="banner-slider__image"
        />
        <div className="banner-slider__pagination">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              className={`banner-slider__dot${i === activeIndex ? ' banner-slider__dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
