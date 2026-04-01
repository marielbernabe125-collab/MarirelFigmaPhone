const reviews = [
  {
    id: 1,
    name: 'Khelly',
    avatarUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-90a4a584bf19a372.png',
    rating: 5,
    comment: 'Absolutely love my new laptop!',
  },
  {
    id: 2,
    name: 'Marah',
    avatarUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-af52a8f075ddbba3.png',
    rating: 5,
    comment: 'Great quality and speedy delivery.',
  },
  {
    id: 3,
    name: 'Jhodel',
    avatarUrl: 'https://cdn.codia.ai/figma/teYoZ3c8zgwLDymeBHakJT/img-51f19e4028259560.png',
    rating: 5,
    comment: 'The gaming laptop is a beast!',
  },
];

function StarRating({ count }) {
  return (
    <div className="star-rating">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star-rating__star">&#9733;</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-card__user">
        <div className="review-card__avatar-wrap">
          <img src={review.avatarUrl} alt={review.name} className="review-card__avatar" />
          <span className="review-card__name">{review.name}</span>
        </div>
        <StarRating count={review.rating} />
      </div>
      <p className="review-card__comment">{review.comment}</p>
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="reviews-section">
      <div className="section-header">
        <h2 className="section-title">Customer Reviews</h2>
      </div>
      <div className="reviews-list">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
