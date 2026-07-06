export function renderFooter({ logoSrc = '', logoAlt = '', statement = '', links = [] } = {}) {
  const linksMarkup = links
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('');

  const logoMarkup = logoSrc ? `<img src="${logoSrc}" alt="${logoAlt}" class="footer-logo" />` : '';

  return `
    <footer class="site-footer">
      ${logoMarkup}
      <p>${statement}</p>
      <div class="footer-links">${linksMarkup}</div>
    </footer>
  `;
}
