// Blog search and category filter
(function () {
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categoryList');
  const articles = document.querySelectorAll('.row.gy-lg-7 > article');

  if (!searchInput || !categorySelect || !articles.length) return;

  function filterArticles() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;

    articles.forEach(article => {
      const title = article.querySelector('h3')?.textContent.toLowerCase() || '';
      const category = article.dataset.category || '';

      const matchesSearch = !searchTerm || title.includes(searchTerm);
      const matchesCategory = !selectedCategory || category === selectedCategory;

      article.style.display = matchesSearch && matchesCategory ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', filterArticles);
  categorySelect.addEventListener('change', filterArticles);
})();
