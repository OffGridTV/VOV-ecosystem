import { renderHeader } from '../../components/header.js';
import { renderHero } from '../../components/hero.js';
import { renderHowVovWorks } from '../../components/howVovWorks.js';
import { renderFooter } from '../../components/footer.js';

const app = document.getElementById('app');

const siteData = {
  brand: 'VOV VERIFIED',
  navItems: [
    { label: 'Methodology', href: '#methodology' },
    { label: 'Investigations', href: '#investigations' },
    { label: 'About', href: '#about' }
  ],
  hero: {
    title: [
      'Independent Verification',
      'for Real-World Decisions'
    ],
    lead: 'A simple question should not require twenty websites, six videos, two AI conversations, and a Reddit rabbit hole.',
    description: 'VOV investigates real-world claims through transparent methodology, documented evidence, and permanent public records.',
    actions: [
      { label: 'View Investigations', href: '#investigations' },
      { label: 'Read the VOV Standard', href: '#standard', variant: 'secondary' }
    ]
  },
  infographic: {
    imageSrc: '../../assets/VOV landing page image.png',
    imageAlt: 'VOV Verified investigation status and evidence classification infographic'
  },
  howVovWorks: {
    imageSrc: '../../assets/how-vov-works.png',
    imageAlt: 'VOV ecosystem process and investigation classification diagram'
  },
  footer: {
    logoSrc: '../../assets/EVAI Logo.svg',
    logoAlt: 'EVAI Logo',
    statement: 'Copyright 2026 EVAI, All Rights Reserved',
    links: [
      { label: 'Methodology', href: '#methodology' },
      { label: 'Investigations', href: '#investigations' },
      { label: 'About', href: '#about' }
    ]
  }
};

app.innerHTML = `
  <header class="hero">
    ${renderHeader({ brand: siteData.brand, navItems: siteData.navItems })}
    ${renderHero(siteData.hero)}
  </header>
  <section class="vov-infographic-section">
    <div class="vov-infographic-container">
      <img src="${siteData.infographic.imageSrc}" alt="${siteData.infographic.imageAlt}" class="vov-infographic" />
    </div>
  </section>
  ${renderFooter(siteData.footer)}
`;
