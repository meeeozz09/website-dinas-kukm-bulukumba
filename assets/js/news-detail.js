document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const newsId = urlParams.get('id');

  if (newsId) {
    fetch('../data/news.json')
      .then(response => response.json())
      .then(news => {
        const newsItem = news.find(item => item.id == newsId);
        if (newsItem) displayNewsDetail(newsItem);
      })
      .catch(error => console.error('Error loading news detail:', error));
  }

  function displayNewsDetail(item) {
    const newsDetail = document.getElementById('news-detail');
    
    newsDetail.innerHTML = `
      <header class="news-header">
        <span class="news-category">${item.category}</span>
        <h2 class="news-title">${item.title}</h2>
        <div class="news-meta">
          <span class="news-date"><i class="far fa-calendar-alt"></i> ${formatDate(item.date)}</span>
        </div>
      </header>
      
      <div class="news-body">
        <img src="../assets/images/news/${item.image}" alt="${item.title}" class="featured-image">
        <div class="news-content">
          ${item.content}
        </div>
      </div>
    `;
    
    document.title = `${item.title} - Dinas Koperasi, UKM, dan Tenaga Kerja`;
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  }
});