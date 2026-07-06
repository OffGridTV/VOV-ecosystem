export function renderFooter({ statement = '', links = [] } = {}) {
  const linksMarkup = links
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('');

  return `
    <footer class="site-footer">
      <p>${statement}</p>
      <div class="footer-links">${linksMarkup}</div>
    </footer>
  `;
}
