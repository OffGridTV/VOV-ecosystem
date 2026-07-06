import { renderButton } from './button.js';

export function renderHero({
  title,
  lead,
  description,
  actions = []
} = {}) {
  const titleMarkup = Array.isArray(title) ? title.join('<br>') : title;
  const buttonsMarkup = actions.map((action) => renderButton(action)).join('');

  return `
    <section class="hero-content">
      <h1>${titleMarkup}</h1>
      <p class="lead">${lead}</p>
      <p>${description}</p>
      <div class="buttons">${buttonsMarkup}</div>
    </section>
  `;
}
