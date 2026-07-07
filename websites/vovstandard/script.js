import { renderHeader } from '/components/header.js';
import { renderFooter } from '/components/footer.js';

const app = document.getElementById('app');

const navItems = [
  { href: 'https://vovverified.com/', label: 'VOV Verified' },
  { href: '/constitution/README.md', label: 'Constitution' },
  { href: '/investigations/README.md', label: 'Investigations' },
  { href: '/', label: 'Home' }
];

const footerData = {
  logoSrc: '/assets/EVAI Logo.svg',
  logoAlt: 'EVAI Logo',
  publishedBy: 'Off Grid TV',
  governedBy: 'The VOV Standard',
  initiative: 'An EVAI Initiative'
};

app.innerHTML = `
  <header class="hero hero-standard">
    ${renderHeader({ brand: 'VOV STANDARD', navItems })}
    <section class="hero-content">
      <p class="hero-kicker">VOV STANDARD</p>
      <h1>The Standard for Transparent Verification.</h1>
      <p class="hero-description">VOV Standard publishes the methodology, governance framework, terminology, evidence standards, and constitutional documents that support VOV Verified.</p>
      <p class="hero-description">This site serves as the public reference layer for how verification is defined, governed, and documented across the VOV ecosystem.</p>
      <div class="hero-buttons">
        <a href="/constitution/README.md" class="btn btn-primary">View Governance</a>
        <a href="/investigations/README.md" class="btn btn-secondary">Evidence Framework</a>
      </div>
    </section>
  </header>
  ${renderFooter(footerData)}
`;
