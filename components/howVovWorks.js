export function renderHowVovWorks({ imageSrc, imageAlt } = {}) {
  return `
    <section class="how-vov-works" aria-labelledby="how-vov-works-title">
      <div class="how-vov-works__panel">
        <h2 id="how-vov-works-title">How VOV Works</h2>
        <figure class="how-vov-works__graphic">
          <img src="${imageSrc}" alt="${imageAlt}" />
        </figure>
      </div>
    </section>
  `;
}
