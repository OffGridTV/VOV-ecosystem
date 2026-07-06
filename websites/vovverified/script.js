import { renderHero } from '../../components/hero.js';
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
  landingImage: {
    imageSrc: '../../assets/VOV landing page image 7-26.png',
    imageAlt: 'VOV Landing Page'
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
    links: []
  }
};

app.innerHTML = `
  <section class="landing-image-section">
    <div class="landing-image-container">
      <img src="${siteData.landingImage.imageSrc}" alt="${siteData.landingImage.imageAlt}" class="landing-image" />
    </div>
  </section>
  <section class="hero-section">
    ${renderHero(siteData.hero)}
  </section>
  ${renderFooter(siteData.footer)}
`;
