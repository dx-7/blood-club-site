// router.js

const contentContainer = document.getElementById('spa-content');

async function loadPage(pageName, addToHistory = true) {
  try {
    const response = await fetch(`/pages/${pageName}.html`);
    const html = await response.text();
    contentContainer.innerHTML = html;

    // Run Lightbox init if needed
    if (window.lightbox) lightbox.init();

    if (addToHistory) {
      history.pushState({ page: pageName }, '', `/${pageName === 'home' ? '' : pageName}`);
    }
  } catch (e) {
    contentContainer.innerHTML = '<h2>Page not found</h2>';
  }
}

function handleLinkClick(event) {
  const link = event.target.closest('a[data-page]');
  if (link) {
    event.preventDefault();
    const page = link.getAttribute('data-page');
    loadPage(page);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', handleLinkClick);

  // Handle browser back/forward
  window.addEventListener('popstate', (e) => {
    const page = e.state?.page || 'home';
    loadPage(page, false);
  });

  // Initial load
  const currentPath = location.pathname.replace(/^\//, '') || 'home';
  loadPage(currentPath);
});
