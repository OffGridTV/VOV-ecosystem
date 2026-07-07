import { renderFooter } from '../../components/footer.js';

const app = document.getElementById('app');

const siteData = {
  methodologyImage: {
    src: 'assets/VOV landing page image 7-26.png',
    alt: 'VOV process overview and evidence flow'
  },
  footer: {
    logoSrc: '/assets/EVAI%20Logo.svg',
    logoAlt: 'EVAI Logo',
    publishedBy: 'Off Grid TV',
    governedBy: 'The VOV Standard',
    initiative: 'An EVAI Initiative'
  }
};

app.innerHTML = `
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Independent Verification<br>for Real-World Decisions</h1>
      <p class="hero-lead">A simple question shouldn't require twenty websites, six videos, two AI conversations, and a Reddit rabbit hole.</p>
      <p class="hero-description">VOV independently investigates real-world claims through transparent methodology, documented evidence, and public results.</p>
      <div class="hero-buttons">
        <a href="#investigations" class="btn btn-primary">Browse Investigations</a>
        <a href="https://vovstandard.com/" class="btn btn-secondary">Read the VOV Standard</a>
      </div>
    </div>
  </section>

  <section class="methodology-preview" aria-label="VOV methodology preview">
    <img src="${siteData.methodologyImage.src}" alt="${siteData.methodologyImage.alt}" class="methodology-image" />
  </section>

  <!-- Footer -->
  ${renderFooter(siteData.footer)}
`;
