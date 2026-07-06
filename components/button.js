export function renderButton({ label, href = '#', variant = 'primary' } = {}) {
  const className = variant === 'secondary' ? 'secondary' : 'primary';

  return `
    <a class="${className}" href="${href}">${label}</a>
  `;
}
