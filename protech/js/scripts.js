// js/scripts.js
$(document).ready(function () {
  const dummyReviews = [
    {
      source: 'Google',
      name: 'Jane Doe',
      rating: 5,
      text: 'Fast and super friendly service!',
    },
    {
      source: 'Facebook',
      name: 'John Smith',
      rating: 4,
      text: 'Came to my home and fixed my car quickly. Highly recommend.',
    },
  ];

  dummyReviews.forEach((review) => {
    $('#reviews-container').append(`
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${review.name} <small class="text-muted">(${review.source})</small></h5>
            <p class="card-text">${'⭐'.repeat(review.rating)}</p>
            <p class="card-text">${review.text}</p>
          </div>
        </div>
      </div>
    `);
  });
});
