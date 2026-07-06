export function renderNavigation({ brand = 'VOV VERIFIED', navItems = [] } = {}) {
  const links = navItems
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('');

  return `
    <nav class="nav">
      <div class="brand">${brand}</div>
      <div class="nav-links">${links}</div>
    </nav>
  `;
}
