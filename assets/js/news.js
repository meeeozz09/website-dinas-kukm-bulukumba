document.addEventListener('DOMContentLoaded', function() {
  // Load news data
  fetch('../data/news.json')
    .then(response => response.json())
    .then(news => {
      displayNews(news);
    })
    .catch(error => console.error('Error loading news:', error));

  // Display news cards
  function displayNews(newsItems) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    newsItems.forEach(item => {
      const newsCard = document.createElement('div');
      newsCard.className = 'news-card';
      newsCard.innerHTML = `
        <div class="card-image-container">
          <img src="../assets/images/news/${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="card-body">
          <span class="news-category">${item.category}</span>
          <span class="news-date">${formatDate(item.date)}</span>
          <h3 class="news-title">${item.title}</h3>
          <p class="news-excerpt">${item.excerpt}</p>
          <a href="news-detail.html?id=${item.id}" class="read-more">
            Baca Selengkapnya <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      `;
      newsContainer.appendChild(newsCard);
    });
  }

  // Format date to DD Month YYYY
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  }
});