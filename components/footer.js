export function renderFooter({
  logoSrc = '',
  logoAlt = '',
  logoHref = 'https://evai.us/',
  publishedBy = '',
  publishedByHref = 'https://offgridtv.com/',
  governedBy = '',
  initiative = ''
} = {}) {
  const logoMarkup = logoSrc
    ? `<a href="${logoHref}" aria-label="Visit EVAI" class="footer-logo-link"><img src="${logoSrc}" alt="${logoAlt}" class="footer-logo" /></a>`
    : '';
  const publishedByMarkup = publishedBy
    ? `<p><strong>Published by</strong> <a href="${publishedByHref}" class="footer-text-link">${publishedBy}</a></p>`
    : '';
  
  return `
    <footer class="site-footer">
      <div class="footer-content">
        ${logoMarkup}
        ${publishedByMarkup}
        ${governedBy ? `<p><strong>Governed by</strong> ${governedBy}</p>` : ''}
        ${initiative ? `<p>${initiative}</p>` : ''}
        <p class="copyright">&copy; 2026 EVAI. All Rights Reserved.</p>
      </div>
    </footer>
  `;
}
