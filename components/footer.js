export function renderFooter({ logoSrc = '', logoAlt = '', publishedBy = '', governedBy = '', initiative = '' } = {}) {
  const logoMarkup = logoSrc ? `<img src="${logoSrc}" alt="${logoAlt}" class="footer-logo" />` : '';
  
  return `
    <footer class="site-footer">
      <div class="footer-content">
        ${logoMarkup}
        ${publishedBy ? `<p><strong>Published by</strong> ${publishedBy}</p>` : ''}
        ${governedBy ? `<p><strong>Governed by</strong> ${governedBy}</p>` : ''}
        ${initiative ? `<p>${initiative}</p>` : ''}
        <p class="copyright">&copy; 2026 EVAI. All Rights Reserved.</p>
      </div>
    </footer>
  `;
}
