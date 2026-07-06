import { renderNavigation } from './navigation.js';

export function renderHeader({ brand = 'VOV VERIFIED', navItems = [] } = {}) {
  return `
    ${renderNavigation({ brand, navItems })}
  `;
}
